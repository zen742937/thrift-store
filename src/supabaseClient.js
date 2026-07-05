// Supabase 連線 client：整個專案共用這一個，別的檔案 import { supabase } 就能用。
import { createClient } from '@supabase/supabase-js'

// import.meta.env 是 Vite 讀環境變數的方式（變數名一定要 VITE_ 開頭才讀得到）
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
