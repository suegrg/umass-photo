import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: Request) {
  const supabaseApiKey = process.env.SUPABASE_API_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  if (!supabaseApiKey) throw new Error("No API key found!");
  if (!supabaseUrl) throw new Error("No Supabase URL found!");

  const client = createClient(supabaseUrl, supabaseApiKey);

  const token = request.headers.get("token");
  const email = request.headers.get("email");
  if (token === null) return new Response("", {
    status: 400
  });
  if (email === null) return new Response("", {
    status: 400
  });
  const { data } = await client.auth.verifyOtp({ email, token, type: 'email' })

  console.log(JSON.stringify(data.session))
  if (!data.session) return new Response("", {
    status: 400
  });

  return new Response(JSON.stringify(data.session), {
    status: 200
  });
}
