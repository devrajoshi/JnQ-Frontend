import JokesCard from "./components/JokesCard";
import QuotesCard from "./components/QuotesCard";
import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden">
      <NavBar />
      <div className="pt-4 w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-center font-heading mb-6 text-[#55356E]">
          Funny Jokes and Inspiring Quotes
        </h1>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          <JokesCard />
          <QuotesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
