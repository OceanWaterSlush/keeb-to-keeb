<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "./supabaseClient";
  import type { AuthSession } from "@supabase/supabase-js";
  import { Router, Link, Route } from "svelte-routing";
  import About from "./routes/About.svelte";
  import Account from "./routes/Account.svelte";
  import Home from "./routes/Home.svelte";
  import Play from "./routes/Play/Play.svelte";
  import Updates from "./routes/Updates.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import "./styles.css";

  export let url = "";

  let session: AuthSession | null;

  onMount(async () => {
    await supabase.auth.getSession().then(({ data }) => {
      session = data.session;
    });

    await supabase.auth.onAuthStateChange((_event, s) => {
      session = s;
    });
  });
</script>

<Router {url}>
  <nav>
    <Link to="/">Keeb To Keeb</Link>
    <div class="links">
      <Link to="/play">Play</Link>
      <Link to="/about">About</Link>
      <Link to="/updates">Updates</Link>
      {#if session}
        <Link to="/account">Account</Link>
      {:else}
        <Link to="/account">Login</Link>
      {/if}
    </div>
  </nav>

  <main>
    <Route path="/" component={Home} />
    <Route path="/play" component={Play} />
    <Route path="/about" component={About} />
    <Route path="/updates" component={Updates} />
    <Route path="/account" component={Account} />
  </main>

  <footer>
    <p>Created by Tommy Son</p>
  </footer>
</Router>

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
