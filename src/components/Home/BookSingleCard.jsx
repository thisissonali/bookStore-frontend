import { useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import BookModal from "./BookModal";
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="border border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className=" my-2 font-sm text-gray-500 mr-20">{book._id}</h4>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <p className="mr-4 hover:cursor-pointer">
          <GoEye size={31} color="blue" onClick={() => setShowModal(true)} />
        </p>
        <Link to={`/books/edit/${book._id}`}>
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
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
