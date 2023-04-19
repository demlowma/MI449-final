import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://khhwrpczyoanbquqysvf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaHdycGN6eW9hbmJxdXF5c3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDg4OTAsImV4cCI6MTk5NzQyNDg5MH0.2WOeu_UQ5_ac-W3_KkOPE-Qa3v1-YLPCpVTzbFynlwo';

export const supabase = createClient(supabaseUrl,supabaseKey);