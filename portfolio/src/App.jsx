import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";

function App() {
  return (
    <>
      {/* ✅ Sticky navbar - must be outside overflow-x-hidden */}
      <Navbar />

      {/* ✅ Main content with background and overflow fix */}
      <div className="w-full h-auto bg-gray-900 text-white overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
