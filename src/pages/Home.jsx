import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import FedBack from '../sections/SendFedback';
import AboutMe from '../sections/AboutMe';
const Home = () => {
  return (
    <>
      <AboutMe />
      <Experience />
      <Projects />
      {/* 
      <Contact />
      <FedBack/> */}
    </>
  );
};

export default Home;