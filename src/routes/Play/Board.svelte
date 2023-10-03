<script lang="ts">
  import { getRandomCombo, playAudio } from "../../lib/helpers";
  import { keydownAudioPaths } from "../../lib/constants";
  import Keycap from "./Keycap.svelte";

  export let comboLength: number;
  export let isGameStarted: boolean;
  export let isGameWon: boolean;
  export let losingCombo: string;
  export let playedCombos: string[];

  let randomCombo = getRandomCombo(comboLength);
  let currentCombo = "";

  let roundsPassed = 0;
  let isReadyToStartNewRound = false;

  let keycapActiveStates = new Array(comboLength).fill(false);

  $: if (roundsPassed === 5) {
    isGameStarted = false;
    isGameWon = true;
    playedCombos = [];
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

        return;
      }

      const randomKeydownAudioPathIndex = Math.floor(
        Math.random() * keydownAudioPaths.length + 0
      );

      playAudio(keydownAudioPaths[randomKeydownAudioPathIndex]);

      keycapActiveStates[randomCombo.indexOf(downedKey)] = true;

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
      isGameStarted = false;
      isGameWon = false;
      losingCombo = randomCombo;
    }
    const downedKey = event.key;

    keycapActiveStates[randomCombo.indexOf(downedKey)] = false;
  }
</script>

<svelte:window on:keydown|trusted={onKeydown} on:keyup|trusted={onKeyup} />

<div>
  {#if !isReadyToStartNewRound || roundsPassed === 0}
    <div class="keycaps">
      {#each randomCombo as key, index}
        <Keycap {key} isActive={keycapActiveStates[index]} />
      {/each}
    </div>
  {/if}

  {#if isReadyToStartNewRound && roundsPassed !== 0}
    <div class="roundPassed">
      <p>Nice, you beat the {currentCombo.toUpperCase()} combo!</p>
      <button type="button" on:click={onClickStartNextRound}
        >Start Next Round</button
      >
    </div>
  {/if}
</div>

<style>
  .keycaps {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .roundPassed {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
