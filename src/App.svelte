<script lang="ts">
  import { comboLengths } from "./lib/constants";
  import Board from "./Board.svelte";

  let comboLength = 2;
  let isGameStarted = false;
  let isGameWon = false;
  let losingRandomCombo = "";

  function onClickStartButton() {
    isGameStarted = true;
  }
</script>

<main>
  {#if !isGameStarted}
    <div class="gameConfiguration">
      <label for="comboLength">Select Length of Combos:</label>
      <select name="comboLength" bind:value={comboLength}>
        {#each comboLengths as comboLength}
          <option value={comboLength}>{comboLength}</option>
        {/each}
      </select>
      <button type="button" on:click={onClickStartButton}>Start</button>
    </div>
  {/if}
  {#if isGameStarted}
    <br />
    <Board
      {comboLength}
      bind:losingRandomCombo
      bind:isGameStarted
      bind:isGameWon
    />
  {/if}
  {#if !isGameStarted && isGameWon}
    <p>You won!</p>
  {/if}
  {#if !isGameStarted && !isGameWon && losingRandomCombo}
    <p>You lost to {losingRandomCombo.toUpperCase()}!</p>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gameConfiguration {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  option {
    text-align: center;
  }
</style>
