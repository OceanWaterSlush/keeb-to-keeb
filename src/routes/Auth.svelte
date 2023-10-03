<script lang="ts">
  import { supabase } from "../supabaseClient";

  let isLoading = false;
  let email = "";

  async function handleLogin() {
    try {
      isLoading = true;

      const { error } = await supabase.auth.signInWithOtp({ email });

      if (error) {
        throw error;
      }

      alert("Check your email for login link!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      isLoading = false;
    }
  }
</script>

<p>Sign in via magic link with your email below.</p>
>

<form on:submit|preventDefault={handleLogin}>
  <div>
    <label for="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Your email"
      bind:value={email}
    />
  </div>
  <div>
    <button type="submit" disabled={isLoading}>
      <span>{isLoading ? "Loading" : "Send magic link"}</span>
    </button>
  </div>
</form>

<style></style>
