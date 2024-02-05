import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/getbook/${id}`)
      .then((response) => {
        setLoading(false);
        setBook(response.data.data);
        toast.success("Info Listed");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex flex-col border border-zinc-950 w-[700px] mt-[50px] justify-center items-center">
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
          </div>
        </div>
      )}
      <div className="ml-[640px]">
        <BackButton />
      </div>
    </div>
  );
};

export default ShowBook;
