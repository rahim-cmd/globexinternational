import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow(){

const[pos,setPos]=useState({x:0,y:0});

useEffect(()=>{

const move=(e)=>{

setPos({

x:e.clientX,

y:e.clientY,

});

};

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return(

<motion.div

animate={{

x:pos.x-180,

y:pos.y-180,

}}

transition={{

type:"spring",

damping:40,

stiffness:180,

}}

className="
pointer-events-none
fixed
z-10
h-[360px]
w-[360px]
rounded-full
bg-yellow-400/10
blur-[120px]
"
/>

);

}