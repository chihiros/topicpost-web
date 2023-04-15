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

export const SupabaseLoginWithPassword = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  })

  // console.log('data', data);
  // console.log('error', error);
  return { data, error }
}

export const SupabaseSignUp = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  })

  // console.log('data', data);
  // console.log('error', error);
  return { data, error }
}

export const SupabaseLogout = async () => {
  const error = await supabaseClient.auth.signOut()

  // console.log('error', error);
  return error
}

export const GetSession = async () => {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session;
};
