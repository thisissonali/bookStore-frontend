import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 z-50 flex top-0 bottom-0 right-0 left-0 items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          color="red"
          className="absoulute right-6 top-6  text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg ">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500 ">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you wanna show</p>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam at, possimus ipsum exercitationem non quasi delectus rem. Quam animi exercitationem illum quas excepturi fuga, sit corporis eos? Aperiam, recusandae?
        Illo hic unde ipsa, omnis in autem animi necessitatibus voluptatum, illum suscipit nesciunt, eveniet veritatis provident sapiente temporibus asperiores iusto atque dolorum magnam? Earum soluta explicabo incidunt, pariatur neque labore.</p>
      </div>
    </div>
  );
};

export default BookModal;
