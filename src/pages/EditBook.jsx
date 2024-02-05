import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/getbook/${id}`)
      .then((response) => {
        setLoading(false);
        setTitle(response.data.data.title);
        setAuthor(response.data.data.author);
        setPublishYear(response.data.data.publishYear);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const submitHandler = () => {
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/updatebook/${id}`, {
        title: title,
        author: author,
        publishYear: publishYear,
      })
      .then(() => {
        setLoading(false);
        toast.success("Book Details Edited successfully!");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[50px] ">
          <form
            className=" w-[500px] h-[500px] border border-lime-500 rounded-lg bg-lime-200 p-2"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col justify-center items-center border-b-[2px] border-lime-400">
              <div className="text-xl mt-[20px] font-semibold">
                Enter The Title Of The Book
              </div>
              <input
                type="text"
                value={title}
                className="border-solid border-2 border-black w-[300px] rounded-lg mt-[20px] mb-[20px] p-2"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center border-b-[2px] border-lime-400">
              <div className="text-xl mt-[20px] font-semibold ">
                Enter The Name OF The Author Of The Book
              </div>
              <input
                type="text"
                value={author}
                className="border-solid border-2 border-black w-[300px] rounded-lg mt-[20px] mb-[20px] p-2"
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl mt-[20px] font-semibold ">
                Enter The Publish Year Of The Book
              </div>
              <input
                type="text"
                value={publishYear}
                className="border-solid border-2 border-black w-[300px] rounded-lg mt-[20px] mb-[20px] p-2"
                onChange={(event) => setPublishYear(event.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="text-xl mt-[20px] mb-[20px] border border-lime-800 bg-lime-500 text-white p-4 rounded-md"
              >
                Save Book
              </button>
            </div>
          </form>
          <BackButton />
        </div>
      )}
    </div>
  );
};

export default EditBook;
