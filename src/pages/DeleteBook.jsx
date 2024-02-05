import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/getbook/${id}`)
      .then((response) => {
        setLoading(false);
        setBook(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error);
      });
  }, []);
  const submitHandler = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/deletebook/${id}`)
      .then(() => {
        setLoading(false);
        toast.success("Book Deleted Successfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error);
      });
  };
  return (
    <div>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={submitHandler}
            className="flex flex-col border border-zinc-950 w-[700px] mt-[50px] justify-center items-center"
          >
            <div className="mt-[20px] mb-[20px] font-bold">
              Are You Sure you want to Delete the Book With The Following
              Details ?
            </div>
            <div className="mt-[20px] mb-[20px] font-semibold">
              Title Of The Book is {book.title}
            </div>
            <div className="mt-[20px] mb-[20px] font-semibold">
              Author Of The Book is {book.author}
            </div>
            <div className="mt-[20px] mb-[20px] font-semibold">
              Book Was Published on {book.publishYear}
            </div>
            <div className="mt-[20px] mb-[20px] font-semibold">
              Data was inserted on {new Date(book.createdAt).toString()}
            </div>
            <button
              type="submit"
              className="mt-[20px] mb-[20px] p-3 w-[150px] border-none rounded-lg bg-red-500 hover:bg-red-800 hover:text-white"
            >
              YES DELETE IT !!
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
