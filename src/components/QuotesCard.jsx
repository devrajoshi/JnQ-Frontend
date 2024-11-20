import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiQuillPenFill } from "react-icons/ri";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const QuotesCard = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(""); // Add state for author
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false); // State to show copied status

  const fetchQuote = async () => {
    setLoading(true);
    try {
      // Fetch the quotes data from API
      // const response = await axios.get(
      //   "https://jnq-api-dj.onrender.com/quotes"
      // );
      const response = await axios.get(
        "http://localhost:5000/quotes"
      );

      // Assuming the response is an array of quotes
      const randomQuote = response.data.quotes[Math.floor(Math.random() * 249)];

      setQuote(randomQuote.quote); // Set the quote
      setAuthor(randomQuote.author); // Set the author
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Sorry, couldn't fetch a quote!"); // Fallback message in case of error
      setAuthor(""); // Clear author if there's an error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${quote} - ${author}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
      })
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="relative w-80 p-4 bg-white rounded-lg shadow-lg border-4 border-transparent hover:border-[#d946ef] transition-all duration-300 transform hover:scale-105">
      {/* Social Media Sharing Buttons */}
      <div className="absolute top-2 right-2 flex justify-evenly items-center space-x-2 border-b-4">
      
        <span className="text-gray-500 font-semibold">
          Share this quote on your:
        </span>

        {/* Facebook Share Button */}
        <button
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}&quote=${encodeURIComponent(`${quote} - ${author}`)}`,
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

        {/* Twitter/X Share Button */}
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `${quote} - ${author}`
              )}`,
              "_blank"
            )
          }
        >
          <FaXTwitter size={30} color="#14171A" className="hover:scale-105" />
        </button>

        {/* Instagram threads share  button */}

        <button
            onClick={() =>
              window.open(
                `https://www.threads.net/intent/post?text=${encodeURIComponent(
                  `${quote} - ${author}`
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

      <h2 className="text-2xl pt-8 font-bold text-center">
        Inspiring Quotes 🧠💭
      </h2>
      <div className="flex justify-center items-center h-48">
  {loading ? (
    <div className="flex flex-col items-center">
      <span className="text-5xl text-indigo-700 animate-writing">
        <RiQuillPenFill />
      </span>
      <p className="text-center pt-2">Loading...</p>
    </div>
  ) : (
    <div className="relative text-center">
      <p className="text-lg italic mb-6">{quote}</p>
      {author && (
        <p className="absolute bottom-0 right-0 text-sm text-gray-600 italic">
          - {author}
        </p>
      )}
    </div>
  )}
</div>


      {/* Button Section */}
      <div className="flex space-x-2 mt-4">
        <button
          className="flex-1 bg-indigo-600 text-white p-2 rounded-3xl hover:bg-indigo-700 transition"
          onClick={fetchQuote}
        >
          Next Quote
        </button>
        <button
          className="flex-1 bg-slate-600 text-white p-2 rounded-3xl hover:bg-slate-700 transition"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy Quote"}
        </button>
      </div>
    </div>
  );
};

export default QuotesCard;
