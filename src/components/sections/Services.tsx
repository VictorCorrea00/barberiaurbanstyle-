    1 "use client";
    2
    3 import { motion } from "framer-motion";
    4
    5 const services = [
    6   { title: "Corte Masculino", description: "Precisão técnica e acabamento artesanal." },
    7   { title: "Degradê Fade", description: "A técnica que define o padrão do seu estilo." },
    8   { title: "Barba Premium", description: "Ritual completo com toalha quente e óleos de elite." },
    9 ];
   10
   11 export default function Services() {
   12   return (
   13     <section className="py-32 bg-[#050505] text-[#F8F8F8] relative overflow-hidden" id="servicos">
   14       <div className="container mx-auto px-6">
   15
   16         {/* Header */}
   17         <div className="mb-20">
   18           <motion.h2
   19             initial={{ opacity: 0, y: 30 }}
   20             whileInView={{ opacity: 1, y: 0 }}
   21             viewport={{ once: true }}
   22             className="text-5xl md:text-8xl font-serif italic text-[#F8F8F8] leading-none"
   23           >
   24             Nossa <br /> <span className="text-[#C5A059]">Excelência.</span>
   25           </motion.h2>
   26         </div>
   27
   28         {/* Grid of Boxes */}
   29         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
   30           {services.map((service, index) => (
   31             <motion.div
   32               key={service.title}
   33               initial={{ opacity: 0, y: 30 }}
   34               whileInView={{ opacity: 1, y: 0 }}
   35               viewport={{ once: true }}
   36               transition={{ delay: index * 0.1 }}
   37               className="flex flex-col border border-[#333333] p-8 hover:border-[#C5A059] transition-colors
      duration-500 bg-[#0a0a0a]"
   38             >
   39               <span className="text-[#C5A059] font-bold uppercase tracking-[0.2em] text-[10px] mb-6">0{index +
      1}</span>
   40               <h3 className="text-3xl font-serif italic mb-4">{service.title}</h3>
   41               <p className="text-[#A3A3A3] font-light mb-8 flex-grow">{service.description}</p>
   42
   43               {/* Boxed CTA */}
   44               <a
   45                 href="https://agenda.strivaapp.com/urban-style-barber"
   46                 target="_blank"
   47                 rel="noopener noreferrer"
   48                 className="w-full border border-[#FFFFFF] py-4 text-center font-bold uppercase tracking-widest
      text-xs hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#050505] transition-all duration-500"
   49               >
   50                 AGENDAR
   51               </a>
   52             </motion.div>
   53           ))}
   54         </div>
   55       </div>
   56     </section>
   57   );
   58 }
