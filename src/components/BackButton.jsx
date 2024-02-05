import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex flex-row mt-[20px] size-[40px] w-[240px] rounded-md bg-red-300 p-2 pl-6 hover:bg-red-600">
          <p className="mt-[3px] mr-[5px]">
            <MdArrowBackIosNew size={22} />
          </p>
          Go Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
