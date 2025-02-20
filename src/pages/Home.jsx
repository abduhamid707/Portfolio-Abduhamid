import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import FedBack from '../sections/SendFedback';
import AboutMe from '../sections/AboutMe';
import AboutMemore from '../sections/AboutMemore';
import Blogs from '../sections/Blogs';
// import competetion from "../../src/Images/competition.png";

const Home = () => {
  return (
    <>
      <div
      // className="bg-cover bg-center min-h-screen"
      // style={{ backgroundImage: `url(${'/'+competetion})` }}
      >

        <AboutMe />
        <Experience />
        <Projects />
        <Blogs/>
        <AboutMemore />
        <Contact />
        {/* <FedBack /> */}
      </div>
    </>
  );
};

export default Home;