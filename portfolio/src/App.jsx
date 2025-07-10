import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-gray-900 text-white">
        <Navbar />
        <div className="overflow-x-hidden">
          <div className="max-w-screen-xl mx-auto">
            <Banner />
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
