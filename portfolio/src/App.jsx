import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-gray-900 text-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
          <Features />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
