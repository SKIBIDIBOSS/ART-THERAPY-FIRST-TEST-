import GlassCard from "@/components/GlassCard";

export default function LoginPage() {
 return (
   <main className="min-h-screen flex items-center justify-center">

     <GlassCard>

       <h1 className="text-3xl font-bold mb-6">
         Welcome
       </h1>

       <form className="space-y-4">

         <input
           placeholder="First Name"
           className="w-full p-3 rounded-xl bg-black"
         />

         <input
           placeholder="Last Name"
           className="w-full p-3 rounded-xl bg-black"
         />

         <input
           placeholder="Email"
           className="w-full p-3 rounded-xl bg-black"
         />

         <button
           className="
           w-full
           p-3
           rounded-xl
           bg-white
           text-black"
         >
           Continue
         </button>

       </form>

     </GlassCard>

   </main>
 );
}
