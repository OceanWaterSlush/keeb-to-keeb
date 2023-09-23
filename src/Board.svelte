<script lang="ts">
  import { getRandomCombo } from "./lib/helpers";
  import Keycap from "./Keycap.svelte";

  export let comboLength: number;
  export let isGameStarted: boolean;
  export let isGameWon = false;

  const randomCombo = getRandomCombo(comboLength);

  console.log(randomCombo);

  $: console.log(currentCombo);

  let currentCombo = "";

  function onKeydown(event: KeyboardEvent) {
    if (event.repeat) {
      return;
    }

    const downedKey = event.key;

    currentCombo += downedKey;

    // Win
    if (currentCombo === randomCombo) {
      isGameStarted = false;
      isGameWon = true;
    }

    // Lose
    if (downedKey !== randomCombo[currentCombo.length - 1]) {
      isGameStarted = false;
      isGameWon = false;
    }
  }

  function onKeyup() {
    // Lose
    if (currentCombo !== randomCombo) {
      isGameStarted = false;
      isGameWon = false;
    }
  }
</script>

<svelte:window on:keydown|trusted={onKeydown} on:keyup|trusted={onKeyup} />

<div class="keycaps">
  {#each randomCombo as key}
    <Keycap {key} />
  {/each}
</div>

<style>
  .keycaps {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
  }
</style>
