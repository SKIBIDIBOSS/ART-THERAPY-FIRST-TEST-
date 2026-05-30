export default function GlassCard({
 children
}:{
 children: React.ReactNode
}) {
 return (
   <div className="
   backdrop-blur-xl
   bg-white/5
   border
   border-white/10
   rounded-3xl
   shadow-2xl
   p-8">
     {children}
   </div>
 );
}
