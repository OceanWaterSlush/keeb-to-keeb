<script lang="ts">
  import { comboLengths } from "./lib/constants";
  import Board from "./Board.svelte";

  let comboLength = 2;
  let isGameStarted = false;
  let isGameWon = false;

  function onClickStartButton() {
    isGameStarted = true;
  }
</script>

<main>
  {#if !isGameStarted}
    <label for="comboLength">Select Length of Combos:</label>
    <select name="comboLength" bind:value={comboLength}>
      {#each comboLengths as comboLength}
        <option value={comboLength}>{comboLength}</option>
      {/each}
    </select>
    <br />
    <button type="button" on:click={onClickStartButton}>Start</button>
  {/if}
  {#if isGameStarted}
    <br />
    <Board {comboLength} bind:isGameStarted bind:isGameWon />
  {/if}
  {#if !isGameStarted && isGameWon}
    <p>You won!</p>
  {/if}
</main>

<style>
</style>
