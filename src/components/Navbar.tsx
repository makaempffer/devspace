import { User, createClient } from "@supabase/supabase-js";
import { JSX, createSignal } from "solid-js";


export default function Navbar() {
    
    const [user, setUser] = createSignal("");
    supabase.auth.onAuthStateChange((event, session) => {
        setUser(event);
        console.log(event, session)

      })
    
    
    return(
        <div class="h-14 w-screen bg-zinc-900 border-white border-opacity-20 hover:border-opacity-90 duration-500 border">
            <div class="flex content-even justify-start p-2 text-slate-100 content-center">
            <a href="/" class="text-white hover:bg-gradient-to-r rounded p-1 from-indigo-500 via-purple-500 to-pink-500 text-xl duration-500 hover:underline decoration-cyan-500">DevSpace</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/">Home</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/about">About</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/login">Log In!</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/profile"><span>STATUS, {user()}!</span></a>
            </div>
        </div>
    )
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


async function getCurrentUser() {
    const { data: {user} } = await supabase.auth.getUser();
    return user; 
}