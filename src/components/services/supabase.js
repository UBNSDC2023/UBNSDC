import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ibaxaivvlmatndmwxgoa.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYXhhaXZ2bG1hdG5kbXd4Z29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjY5OTgsImV4cCI6MjAxNTE0Mjk5OH0.dcroAQSgqjW-vt-_awBKg8DL8blgj9Ymoy9s7AyjhpU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;