"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {

 return (
   <section className="min-h-screen flex items-center justify-center">

     <motion.div
       initial={{opacity:0,y:50}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
       className="text-center"
     >

       <h1 className="text-8xl font-bold">
         Art Therapy Website
       </h1>

       <p className="mt-6 text-xl text-gray-400">
         Developed by Aarav
       </p>

       <Link
         href="/login"
         className="
         mt-10
         inline-block
         px-8
         py-4
         rounded-full
         bg-white
         text-black
         font-semibold
         hover:scale-105
         transition"
       >
         Start Now
       </Link>

     </motion.div>

   </section>
 );
}
