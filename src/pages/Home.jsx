import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../index.css";
import { CiEdit } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col">
            <Link to="/books/create">
              <button className="ml-[1000px] flex flex-row mt-[50px] bg-red-300 text-xl border-solid border-2 p-2 rounded-md text-white mb-[-2px]">
                ADD BOOK
                <p className="ml-[5px] mt-[5px]">
                  <BiBookAdd color="black" />
                </p>
              </button>
            </Link>
            <table className="table-auto bg-red-300 border border-zinc-100 ">
              <thead>
                <tr>
                  <th className="border border-zinc-100 p-10 text-2xl text-white">
                    No
                  </th>
                  <th className="border border-zinc-100 p-10 text-2xl text-white">
                    Title
                  </th>
                  <th className="border border-zinc-100 p-10 text-2xl text-white">
                    Author
                  </th>
                  <th className="border border-zinc-100 p-10 text-2xl text-white">
                    Publish Year
                  </th>
                  <th className="border border-zinc-100 p-10 text-2xl text-white">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="border border-zinc-100 p-6 text-2xl text-white">
                      {index + 1}
                    </td>
                    <td className="border border-zinc-100 p-6 text-lg  text-white ">
                      {book.title}
                    </td>
                    <td className="border border-zinc-100 p-6 text-lg text-white">
                      {book.author}
                    </td>
                    <td className="border border-zinc-100 p-6 text-lg text-white">
                      {book.publishYear}
                    </td>
                    <td className="border border-zinc-100 flex flex-row p-6">
                      <Link to={`/books/edit/${book._id}`} >
                        <p className="mr-4 hover:cursor-pointer">
                          <CiEdit size={31} color="green" />
                        </p>
                      </Link>
                      <Link to={`/books/details/${book._id}`}>
                        <p className="mr-4 hover:cursor-pointer">
                          <CiCircleInfo size={31} color="blue" />
                        </p>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <p className="hover:cursor-pointer">
                          <MdDeleteOutline size={31} color="red" />
                        </p>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
