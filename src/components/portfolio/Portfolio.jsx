import "./portfolio.scss";
import { useRef } from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";



const items = [

  {
    id:1,
    title:"E-commerce",
    img:"shop.jpg",
    desc:"I will make a special application as I will use react js mongodb mongoos express and node js. I will make a beautiful background and a phenomenon for the application with an elegant and attractive design.",
  },

  {
    id:2,
    title:"Gym App",
    img:"/gym.jpg",
    desc:"I will build a full application that contains this is for full body exercise and with clean food.",
  },

  {
    id:3,
    title:"Movie App",
    img:"/movie.jpg",
    desc:"I will make a movie application through next js This application has many features such as having a lot of movies that are not found in other sites.",
  },

  {
    id:4,
    title:"Music App",
    img:"/music.jpg",
    desc:"I will add magical touches that simulate imagination and impact so that the user is satisfied with the music experience with my personal platforms. This application will be a combination between next js and react js.",
  }


];


const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref, 
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress,[0,1], [-300, 300])


  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer1" ref={ref} >
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer1" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>

          </motion.div>
        </div>

      </div>
    </section>
  );
};


const Portfolio = () => {

  const ref= useRef()


  const {scrollYProgress} = useScroll({target:ref, offset:["end end" , "start start"]});


  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  });



  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item=>
        <Single item={item} key={item.id} />
      )}
    </div>
  )
}

export default Portfolio