import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaRegLaughBeam,
} from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const JokesCard = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false); // State to show copied status

  const fetchJoke = async () => {
    setLoading(true);
    setCopied(false); // Reset copied status when fetching a new joke
    try {
      const response = await axios.get("https://jnq-api-dj.onrender.com/jokes");
      // const response = await axios.get("http://localhost:5000/jokes");
      const randomJoke =
        response.data.jokes[Math.floor(Math.random() * 889 + 1)];
      setJoke(randomJoke.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Sorry, couldn't fetch a joke!");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="w-80 p-4 bg-white rounded-lg shadow-lg border-4 border-transparent hover:border-[#6366f1] transition-all duration-300 transform hover:scale-105">
      <div>
        <div className="absolute top-2 right-2 flex justify-evenly items-center space-x-2 border-b-4">
          <span className="text-gray-500 font-semibold">
            Share this joke on your:
          </span>
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}&quote=${joke}`,
                "_blank"
              )
            }
          >
            <FaFacebookSquare
              size={30}
              color="#1877F2"
              className="hover:scale-105"
            />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  joke
                )}`,
                "_blank"
              )
            }
          >
            <FaXTwitter size={30} color="#14171A" className="hover:scale-105" />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.threads.net/intent/post?text=${encodeURIComponent(
                  joke
                )}`,
                "_blank"
              )
            }
          >
            <BsFillThreadsFill
              size={30}
              color="#14171A"
              className="hover:scale-105"
            />
          </button>
        </div>
      </div>

      <h2 className="text-2xl pt-8 font-bold text-center">Funny Jokes 😂😆</h2>
      <div className="flex justify-center items-center text-center h-48">
        {loading ? (
          <div className="flex flex-col items-center">
            <span className="text-5xl text-yellow-600 animate-writing">
              <FaRegLaughBeam />
            </span>
            <p className="text-center pt-2">Loading...</p>
          </div>
        ) : (
          <p className="text-lg font-sans">{joke}</p>
        )}
      </div>

      {/* Button Section */}
      <div className="flex space-x-2 mt-4">
        <button
          className="flex-1 bg-indigo-600 text-white p-2 rounded-3xl hover:bg-indigo-700 transition"
          onClick={fetchJoke}
        >
          Next Joke
        </button>
        <button
          className="flex-1 bg-slate-600 text-white p-2 rounded-3xl hover:bg-slate-700 transition"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy Joke"}
        </button>
      </div>
    </div>
  );
};

export default JokesCard;
