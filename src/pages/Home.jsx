import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../index.css";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookTable from "../components/Home/BookTable";
import BookCard from "../components/Home/BookCard";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books/getAllBooks")
      .then((response) => {
        setLoading(false);
        setBooks(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [showType]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <button
          className="bg-cyan-600 p-3 rounded-md mr-[10px] mt-[50px] text-white"
          onClick={() => setShowType("table")}
        >
          TABLE VIEW
        </button>
        <button
          className="bg-cyan-600 p-3 rounded-md mr-[10px] mt-[50px] text-white"
          onClick={() => setShowType("card")}
        >
          CARD VIEW
        </button>
      </div>
      <div className="flex items-center justify-center flex-col">
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-2xl mt-[50px]">Books List</p>
            <Link to="/books/create">
              <button className="ml-[1000px] flex flex-row mt-[50px] bg-red-300 text-xl border-solid border-2 p-2 rounded-md text-white mb-[-2px]">
                ADD BOOK
                <p className="ml-[5px] mt-[5px]">
                  <BiBookAdd color="black" />
                </p>
              </button>
            </Link>
            {showType === "card" ? (
              <BookCard books={books} />
            ) : (
              <BookTable books={books} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
