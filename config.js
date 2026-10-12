// Public Supabase settings. The anon key is safe to publish: every table is protected by row-level security,
// and all GP changes go through server-side functions. NEVER put the service_role key here.
window.GP_CONFIG = {
  url: 'https://YOUR-PROJECT.supabase.co',
  anonKey: 'YOUR-ANON-KEY',
};
