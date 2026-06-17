  1 "use client";
    2
    3 import { motion } from "framer-motion";
    4
    5 const HERO_BANNER_URL =
      "https://acyyffohsqxabkksvpae.supabase.co/storage/v1/object/sign/web/ChatGPT%20Image%2016%20jun%202026,%2013_12_12
      .png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNjg5Yjc5My03NzdhLTRlNDUtOTEzYy05ZjIwZGQ5ZTliZDciLCJhbGciOiJ
      IUzI1NiJ9.eyJ1cmwiOiJ3ZWIvQ2hhdEdQVCBJbWFnZSAxNiBqdW4gMjAyNiwgMTNfMTJfMTIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6
      MTc4MTYzMDY1OSwiZXhwIjoxODEzMTY2NjU5fQ.PUufMAyTHZQ3CA4wLw9yc4fXCJIqvncR0G26AUD6gT8";
    6
    7 export default function Hero() {
    8   return (
    9     <section className="h-screen w-full bg-[#000000] flex flex-col items-center justify-between p-4 md:p-6
      overflow-hidden">
   10
   11       {/* 1. Logo Area: Anchored and Dominant */}
   12       <div className="flex-[3] w-full flex items-center justify-center">
   13         <motion.img
   14           initial={{ opacity: 0, scale: 0.98 }}
   15           animate={{ opacity: 1, scale: 1 }}
   16           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
   17           src={HERO_BANNER_URL}
   18           alt="Urban Style Barber"
   19           className="max-h-[60vh] w-auto object-contain"
   20         />
   21       </div>
   22
   23       {/* 2. Content Area: Editorial Hierarchy with High Conversion CTA */}
   24       <motion.div
   25         initial={{ opacity: 0, y: 20 }}
   26         animate={{ opacity: 1, y: 0 }}
   27         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
   28         className="flex-1 w-full max-w-2xl text-center text-[#FFFFFF] flex flex-col items-center gap-4"
   29       >
   30         <h1 className="text-xl md:text-3xl font-serif italic uppercase tracking-[0.05em] text-[#FFFFFF]">
   31           A BARBEARIA DOS HOMENS QUE SE DESTACAM
   32         </h1>
   33
   34         <p className="text-sm md:text-base text-[#999999] font-light tracking-[0.15em] uppercase">
   35           Cortes premium. Atendimento de excelência.
   36         </p>
   37
   38         <a
   39           href="https://agenda.strivaapp.com/urban-style-barber"
   40           target="_blank"
   41           rel="noopener noreferrer"
   42           className="inline-block px-12 py-4 bg-[#D4AF37] text-[#000000] font-bold uppercase tracking-[0.25em]
      hover:bg-[#FFFFFF] transition-all duration-500 text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)]"
   43         >
   44           AGENDAR AGORA
   45         </a>
   46
   47         <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-[#CCCCCC] pt-2">
   48             <span className="text-[#D4AF37] flex items-center gap-1">
   49                 4.9 de avaliação
   50             </span>
   51             <span>•</span>
   52             <span>+1000 ATENDIMENTOS</span>
   53         </div>
   54       </motion.div>
   55     </section>
   56   );
   57 }
