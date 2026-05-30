"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
 return (
   <>
     <motion.div
       className="fixed inset-0 -z-10"
       animate={{
         background:[
           "radial-gradient(circle at 20% 20%,#2563eb 0%,#050505 50%)",
           "radial-gradient(circle at 80% 40%,#9333ea 0%,#050505 50%)",
           "radial-gradient(circle at 50% 70%,#06b6d4 0%,#050505 50%)"
         ]
       }}
       transition={{
         duration:20,
         repeat:Infinity
       }}
     />
   </>
 );
}
