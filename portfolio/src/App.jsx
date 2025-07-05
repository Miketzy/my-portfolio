import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-auto bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
