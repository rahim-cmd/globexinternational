import { motion } from "framer-motion";

export default function Particles(){

const particles=new Array(12).fill(0);

return(

<div className="absolute inset-0 overflow-hidden pointer-events-none">

{particles.map((_,i)=>(

<motion.span

key={i}

animate={{

y:[0,-80,0],

opacity:[0,.5,0],

}}

transition={{

duration:4+Math.random()*6,

delay:i*.4,

repeat:Infinity,

}}

style={{

left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`,

}}

className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300"

/>

))}

</div>

)

}