import React ,{useState}from "react";
import "./App.css";
import Header from "./Components/Header";
// import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Page/Main";
import AnimatedBackground from "./Components/Background";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./Components/WelcomeScreen";
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <main className="pb-14 lg:pb-0">
        <AnimatePresence mode="wait">
          {showWelcome && (
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          )}
        </AnimatePresence>

        {!showWelcome && (
          <>
            <Header />
            <Main />
            <AnimatedBackground />
            {/* <Outlet/> */}
          </>
        )}
      </main>

     
    </>
  );
};



function app(){
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default app;

