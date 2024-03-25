import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss";


function App() {
  const scrollDown = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({
      behavior: 'smooth'
    })
    // window.scrollTo({
    //   top: window.innerHeight, // You can adjust the scroll amount as needed
    //   behavior: "smooth",
    // });
  };
  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <Intro scrollDown={scrollDown}/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
