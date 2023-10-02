/// <reference types="svelte" />
/// <reference types="vite/client" />

interface SupabaseEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMetaEnv extends SupabaseEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
