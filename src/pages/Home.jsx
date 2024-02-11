import React, {useEffect} from "react"
import Projects from "../components/Projects"
import Scroll from "../components/Scroll.jsx"
import '../index.css'

const Home = () => {

    const handleScroll = () => {
        sessionStorage.setItem("scrollY", window.scrollY);
      };
      
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem("scrollY");
        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition, 10));
          sessionStorage.removeItem("scrollY");
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div>
            <Projects />
            <Scroll/>
        </div>
    )
}

export default Home