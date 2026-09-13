import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";
import type { Itechnology } from "./types/technologyType";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-[#f8fafc]">
            <div className="flex items-end gap-1.5">
              <span className="w-1.5 h-6 bg-[#0f172a] rounded-full animate-wave"></span>
              <span className="w-1.5 h-6 bg-[#0f172a] rounded-full animate-wave [animation-delay:0.1s]"></span>
              <span className="w-1.5 h-6 bg-[#0f172a] rounded-full animate-wave [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-6 bg-[#0f172a] rounded-full animate-wave [animation-delay:0.3s]"></span>
            </div>
          </div>
        }
      >
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
