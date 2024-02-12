import Header from "./home/header";
import Container from "./home/container"
import { useState } from "react";
import Slide from "./home/Slide";
import Man from "./home/Man" 
import Kids from "./home/Kids"
import  useScreenWidth  from "./hooks/useScreenWidth";



export default function App() {
const [logo , setLogo] = useState("white");
const [activeIndex, setActiveIndex] = useState(0);
const width = useScreenWidth();
  return (
    <main className={`home-page`}  >
    <Header logo={logo} index={activeIndex} />  

 
  
   <Slide activeIndex={activeIndex} setActiveIndex={setActiveIndex} setLogo={setLogo}>
   <div className="swiper-slide">  <Man  index={activeIndex} width={width} setLogo={setLogo} /> </div>
   <div className="swiper-slide">  <Kids  index={activeIndex} width={width} setLogo={setLogo} /> </div>
  
    </Slide>    

    <Container/>
    
    </main>
  )
}