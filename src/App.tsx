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
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;


