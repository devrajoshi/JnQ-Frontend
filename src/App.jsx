import React, { lazy, Suspense } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const JokesCard = lazy(() => import("./components/JokesCard"));
const QuotesCard = lazy(() => import("./components/QuotesCard"));

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden">
      <NavBar />
      <div className="pt-4 pb-8 w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-center font-heading mb-6 text-[#55356E]">
          Funny Jokes and Inspiring Quotes
        </h1>

        <div className="p-4 md:p-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 sm:gap-32 justify-items-center">
          <Suspense fallback={<div>Loading Jokes...</div>}>
            <div>
              <JokesCard />
            </div>
          </Suspense>

          <Suspense fallback={<div>Loading Quotes...</div>}>
            <div>
              <QuotesCard />
            </div>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
