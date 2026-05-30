"use client";

import {
 Home,
 Palette
} from "lucide-react";

export default function Sidebar() {

 return (
   <aside className="
   fixed
   left-0
   top-0
   h-screen
   w-20
   border-r
   border-white/10">

     <div className="p-4">
       <Home />
     </div>

     <div className="p-4">
       <Palette />
     </div>

   </aside>
 );
}
