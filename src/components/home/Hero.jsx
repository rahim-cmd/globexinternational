import { motion } from "framer-motion";

function Hero(){

    return(

        <section className="hero">

            <div className="overlay"/>

            <div className="content">

                <motion.h1

                initial={{opacity:0,y:50}}

                animate={{opacity:1,y:0}}

                transition={{duration:1}}

                >

                    Exporting India's Finest
                    Agricultural Products
                    Worldwide

                </motion.h1>

                <motion.p

                initial={{opacity:0}}

                animate={{opacity:1}}

                transition={{delay:.5}}

                >

                    Premium Quality Spices,
                    Onion, Potato, Rice &
                    Agricultural Products
                    Directly from India.

                </motion.p>

                <div className="buttons">

                    <button className="primary">

                        Explore Products

                    </button>

                    <button className="secondary">

                        Request Quote

                    </button>

                </div>

            </div>

        </section>

    )

}

export default Hero;