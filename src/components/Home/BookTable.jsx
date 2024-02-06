import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
const BookTable = ({books}) => {
  return (
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable
