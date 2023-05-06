import { createClient } from "@supabase/supabase-js";
import { createSignal } from "solid-js";


export default function Login() {
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    return(
        <div class="bg-black w-screen h-screen fixed flex justify-center content-center text-white">
            
            <div class="flex-col justify-center border content-center bg-black w-4/5 md:w-1/3 h-1/2 p-3 m-3">
                <p class="">Please enter your Login details.</p>

                <div class="flex content-evenly gap-5 justify-center">
                    <label class="" for="email">Email</label>
                    <input class="text-black" type="email" name="email" value={email()} onLoad={(e) => setEmail(e.currentTarget.value)} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="example@email.com" required/>

                </div>
                <div class="flex content-center gap-5 justify-center mt-5">
                    <label for="password">Password</label>
                    <input class="text-black" type="password" value={email()} onLoad={(e) => setPassword(e.currentTarget.value)} onChange={(e) => setPassword(e.currentTarget.value)}  required/>
                </div>
                <div class="flex content-center justify-center mt-10 gap-8">
                    <button class="border rounded p-2" onClick={() => loginWithPass(email(), password())}>Login</button>
                    <button class="border rounded p-2" onClick={() => loginWithEmail(email())}>Login Only w/Email</button>
                    <a class="border rounded p-2" href="/register" >Register</a>
                </div>
            </div>

        </div>
    )

}


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


async function loginWithPass(email: string, password: string) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (data) console.log('Login attemp with data: ' + JSON.stringify(data)) 
    else {
        console.warn(error);
    }
}

async function loginWithEmail(email: string) {
    let { data, error } = await supabase.auth.signInWithOtp({
        email: email
      })
}