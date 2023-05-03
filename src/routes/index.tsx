
export default function Home() {
  return (
  <div class="flex bg-black w-screen h-screen fixed flex-col">
    <div class="flex h-fit rounded w-screen content-center">
      
    </div>
    <div class="flex content-evenly justify-center pt-16">
      <a class="text-white border-2 border-gray-400 p-2 rounded hover:underline hover:border-white decoration-blue-400 duration-500" href="/library">My library</a>
      <a class="text-white border-2 border-gray-400 p-2 rounded hover:underline hover:border-white decoration-blue-400 duration-500" href="/profile">Profile</a>
    </div>
  </div>

  );
}
