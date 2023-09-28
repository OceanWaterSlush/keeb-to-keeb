<script lang="ts">
  import { comboLengths } from "./lib/constants";
  import Board from "./Board.svelte";
  import "./styles.css";

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

<nav>
  <a href="/">Keeb To Keeb</a>
  <div class="links">
    <a href="/login">Login</a>
  </div>
</nav>

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
    <div class="board">
      <Board
        {comboLength}
        bind:losingCombo
        bind:isGameStarted
        bind:isGameWon
        bind:playedCombos
      />
    </div>
  {/if}
  {#if !isGameStarted && isGameWon}
    <p>You won!</p>
  {/if}
  {#if !isGameStarted && !isGameWon && losingCombo}
    <p>You lost to the {losingCombo.toUpperCase()} combo!</p>
  {/if}
  {#if playedCombos.length > 0 && !isGameStarted && losingCombo}
    <p>The combos you have just beaten:</p>
    <ul>
      {#each playedCombos as playedCombo}
        <li>{playedCombo.toUpperCase()}</li>
      {/each}
    </ul>
  {/if}
</main>

<footer>
  <p>Created by Tommy Son</p>
</footer>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 3rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 10rem;
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

  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: auto;
  }
</style>
