<script lang="ts">
  import { comboLengths } from "./lib/constants";
  import Board from "./Board.svelte";

  let comboLength = comboLengths[0];
  let isGameStarted = false;
  let isGameWon = false;
  let losingCombo = "";
  let playedCombos: string[] = [];

  function onClickStartButton() {
    isGameStarted = true;
    playedCombos = [];
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
    <Board
      {comboLength}
      bind:losingCombo
      bind:isGameStarted
      bind:isGameWon
      bind:playedCombos
    />
  {/if}
  {#if !isGameStarted && isGameWon}
    <p>You won!</p>
  {/if}
  {#if !isGameStarted && !isGameWon && losingCombo}
    <p>You lost to the {losingCombo.toUpperCase()} combo!</p>
  {/if}
  {#if playedCombos.length > 0 && !isGameStarted && losingCombo}
    <p>The combos you have beaten last game:</p>
    <ul>
      {#each playedCombos as playedCombo}
        <li>{playedCombo.toUpperCase()}</li>
      {/each}
    </ul>
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

  ul {
    padding-left: 0;
  }
</style>
