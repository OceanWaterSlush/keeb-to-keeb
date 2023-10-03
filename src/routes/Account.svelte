<script lang="ts">
  import { onMount } from "svelte";
  import type { AuthSession } from "@supabase/supabase-js";
  import { supabase } from "../supabaseClient";

  export let session: AuthSession;

  let isLoading = false;
  let username: string | null = null;
  let website: string | null = null;
  let avatarUrl: string | null = null;

  onMount(() => {
    getProfile();
  });

  async function getProfile() {
    try {
      isLoading = true;

      const { user } = session;

      const { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, avatar_url")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        username = data.username;
        website = data.website;
        avatarUrl = data.avatar_url;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      isLoading = false;
    }
  }

  async function updateProfile() {
    try {
      isLoading = true;

      const { user } = session;

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      isLoading = false;
    }
  }
</script>

<form on:submit|preventDefault={updateProfile}>
  <div>Email: {session.user.email}</div>
  <div>
    <label for="username">Name</label>
    <input id="username" type="text" bind:value={username} />
  </div>
  <div>
    <label for="website">Website</label>
    <input id="website" type="text" bind:value={website} />
  </div>
  <div>
    <button type="submit" disabled={isLoading}>
      {isLoading ? "Saving ..." : "Update profile"}
    </button>
  </div>
  <button type="button" on:click={() => supabase.auth.signOut()}>
    Sign Out
  </button>
</form>

<style>
</style>
