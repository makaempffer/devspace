import { createClient } from "@supabase/supabase-js";
import { createSignal } from "solid-js";


export default function Register() {
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");   
    return(

        <div class="bg-black w-screen h-screen fixed flex justify-center content-center text-white">
            
            <div class="flex-col justify-center border content-center bg-black w-4/5 md:w-1/3 h-1/2 p-3 m-3">
                <p class="">Please enter your information to register.</p>

                <div class="flex content-evenly gap-5 justify-center">
                    <label class="" for="email">Email</label>
                    <input class="text-black" type="email" name="email" value={email()} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="example@email.com" required/>

                </div>
                <div class="flex content-center gap-5 justify-center mt-5">
                    <label for="password">Password</label>
                    <input class="text-black" type="password" name="password" value={password()} onChange={(e) => setPassword(e.currentTarget.value)} required/>
                    
                </div>
                <div class="flex content-center justify-center mt-10 gap-8">
                    <button class="border rounded p-2 hover:bg-green-600 duration-500" onClick={() => signUpWithEmail(email(), password())}>Register</button>
                    <a class="border rounded p-2 hover:bg-yellow-600 duration-500" href="/login">Go to Login</a>
                </div>

            </div>

        </div>
    )

}


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUpWithEmail(email: string, password: string) {
    let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    })
    console.log(data, error);
}

