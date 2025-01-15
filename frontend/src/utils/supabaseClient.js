import { createClient } from '@supabase/supabase-js';

console.log('supabase running');
console.log(import.meta.env.MODE);

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_KEY) {
    console.error('Environment variables are not loaded correctly.');
  }

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('Supabase client created successfully');