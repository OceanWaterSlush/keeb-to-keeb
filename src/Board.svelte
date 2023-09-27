<script lang="ts">
  import { getRandomCombo } from "./lib/helpers";
  import Keycap from "./Keycap.svelte";

  export let comboLength: number;
  export let isGameStarted: boolean;
  export let isGameWon: boolean;
  export let losingCombo: string;
  export let playedCombos: string[];

  let randomCombo = getRandomCombo(comboLength);
  let currentCombo = "";

  let roundsPassed = 0;
  let isReadyToStartNewRound = true;

  $: if (roundsPassed === 5) {
    isGameStarted = false;
    isGameWon = true;
  }

  function onClickStartNextRound() {
    isReadyToStartNewRound = false;
    randomCombo = getRandomCombo(comboLength);
    currentCombo = "";
  }

  function onKeydown(event: KeyboardEvent) {
    if (!isReadyToStartNewRound || roundsPassed === 0) {
      if (event.repeat) {
        return;
      }

      const downedKey = event.key;

      currentCombo += downedKey;

      // Lose
      if (downedKey !== randomCombo[currentCombo.length - 1]) {
        isGameStarted = false;
        isGameWon = false;
        losingCombo = randomCombo;
      }

      // Round Win
      if (currentCombo === randomCombo) {
        roundsPassed++;
        isReadyToStartNewRound = true;
        playedCombos = [...playedCombos, currentCombo];
      }
    }
  }

  function onKeyup(event: KeyboardEvent) {
    // Lose
    if (!isReadyToStartNewRound && event.key !== "Enter") {
      if (currentCombo !== randomCombo) {
        isGameStarted = false;
        isGameWon = false;
        losingCombo = randomCombo;
      }
    }
  }
</script>

<svelte:window on:keydown|trusted={onKeydown} on:keyup|trusted={onKeyup} />

{#if !isReadyToStartNewRound || roundsPassed === 0}
  <div class="keycaps">
    {#each randomCombo as key}
      <Keycap {key} />
    {/each}
  </div>
{/if}

{#if isReadyToStartNewRound && roundsPassed !== 0}
  <p>Nice, you beat the {currentCombo.toUpperCase()} combo!</p>
  <button type="button" on:click={onClickStartNextRound}
    >Start Next Round</button
  >
{/if}

<style>
  .keycaps {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
  }
</style>
