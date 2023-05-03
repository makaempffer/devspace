

export default function Navbar() {
    return(
        <div class="h-10 w-screen bg-zinc-900 border-white border">
            <div class="flex content-even justify-start p-2 text-slate-100">
                <a class="hover:underline decoration-blue-400" href="/">Home</a>
                <a class="hover:underline decoration-blue-400" href="/about">About</a>
            </div>
        </div>
    )
}