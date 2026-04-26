import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wnflerpqhquxcxtnycha.supabase.co';
const supabaseAnonKey = 'sb_publishable_9PhO7ZgcD1wUizcmoc3dGg_Rwk3jEt7';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
