import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
if (!supabaseUrl) {
  throw new Error('REACT_APP_SUPABASE_URL is not defined')
}

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
if (!supabaseKey) {
  throw new Error('REACT_APP_SUPABASE_KEY is not defined')
}

export const supabaseClient = createClient(supabaseUrl, supabaseKey)
