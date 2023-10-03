<script lang="ts">
  import Router, { location } from "svelte-spa-router";
  import { validateUrl } from "./lib/helpers";
  import About from "./routes/About.svelte";
  import Account from "./routes/Account.svelte";
  import Auth from "./routes/Auth.svelte";
  import Home from "./routes/Home.svelte";
  import Play from "./routes/Play/Play.svelte";
  import Updates from "./routes/Updates.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import "./styles.css";

  const routes = {
    "/about": About,
    "/account": Account,
    "/login": Auth,
    "/": Home,
    "/play": Play,
    "/updates": Updates,
    "*": NotFound,
  };
</script>

{#if validateUrl($location)}
  <nav>
    <a href="/">Keeb To Keeb</a>
    <div class="links">
      <a href="#/play">Play</a>
      <a href="#/about">About</a>
      <a href="#/updates">Updates</a>
      <a href="#/login">Login</a>
    </div>
  </nav>
{/if}

<main>
  <Router {routes} />
</main>

{#if validateUrl($location)}
  <footer>
    <p>Created by Tommy Son</p>
  </footer>
{/if}

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

  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: auto;
  }
</style>
