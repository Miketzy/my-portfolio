import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-gray-900 text-white overflow-x-hidden">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
