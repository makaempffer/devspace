

export default function Navbar() {
    return(
        <div class="h-14 w-screen bg-zinc-900 border-white border">
            <div class="flex content-even justify-start p-2 text-slate-100 content-center">
            <a href="/" class="text-white bg-gradient-to-r rounded p-1 from-indigo-500 via-purple-500 to-pink-500 text-xl duration-500 hover:underline decoration-cyan-500">DevSpace</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/">Home</a>
                <a class="hover:underline decoration-blue-400 mt-2" href="/about">About</a>
            </div>
            
        </div>
    )
}