
import React, { useRef } from "react";
import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial:{
        x:500,
        y:100,
        opacity:0

    },

    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,

        },

    },
}

const Services = () => {


    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})


  return (
    <motion.div className="services" variants={variants} initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    > 
       <motion.div className="textContainer" variants={variants}>
        <p>Focus on achieving your goal even if it costs you to lose a 
            <br/>little of your health</p>
        <hr/>
       </motion.div>
       <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt=""/>
            <h1><motion.b whileHover={{color:"gold"}}>Art</motion.b> Painting
            </h1>
        </div>

        <div className="title">
            
            <h1><motion.b whileHover={{color:"gold"}}>For Me</motion.b> Projects
            </h1>

            <button>WHAT WE DO?</button>
        </div>
       </motion.div>
       <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}><h2>Cafe App</h2>
        <p>I made an application through html css javascript This site is a cafe site. This site consists of many features, for example, in this site, there is a cafe site also. There is a lot of animation..</p>
        <button>Go</button>
        </motion.div>

        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}><h2>Restaurant App</h2>
        <p>I made a site for the restaurant by html css JavaScript. This site consists of navbar services menu about and contact. The restaurant site is also the phone number. There is a fouger to see the restaurant and its distinctive pictures on facebook and instegram.</p>
        <button>Go</button>
        </motion.div>

        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}><h2>Meteo App</h2>
        <p>I made a site by html css JavaScript ES6. This site contains meteorology in the world. I also added a fatch so that I can bring the url and key so that everything appears. I added many icons and beautiful images that mimic the siction and imagination.</p>
        <button>Go</button>
        </motion.div>

        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}><h2>Portfolio App</h2>
        <p>Finally, my official website, which is my portfolio. I made this site by react.js+next.js. I used scss instead of css. This site contains many interesting features and colors. I also put my study effort in it.</p>
        <button>Go</button>
        </motion.div>

       </motion.div>
    </motion.div>
  )
}

export default Services