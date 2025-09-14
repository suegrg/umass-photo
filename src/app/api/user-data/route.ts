import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { attachCookies } from "@/app/utils/supabase/client";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const access_token = request.cookies.get("access-token")?.value;
  const refresh_token = request.cookies.get("refresh-token")?.value;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  if (!access_token) throw new Error("Unauthenticated: access-token cookie missing");
  if (!refresh_token) throw new Error("Unauthenticated: refresh-token cookie missing");
  if (!supabaseUrl) throw new Error("No Supabase URL found!");
  if (!supabaseAnonKey) throw new Error("No Supabase URL found!");

  const client = createClient(supabaseUrl, supabaseAnonKey);
  client.auth.setSession({ access_token, refresh_token });


  const {data: userData } = await client.auth.getUser();
  const response = new Response(JSON.stringify(userData));
  attachCookies(client, response);
  const {data: session }= await client.auth.getSession();
  response.headers.append("Set-Cookie", `access-token=${session.session?.access_token ?? ''}; SameSite=strict; HttpOnly; Secure`)
  response.headers.append("Set-Cookie", `refresh-token=${session.session?.refresh_token ?? ''}; SameSite=strict; HttpOnly; Secure`)

  return response;

}
