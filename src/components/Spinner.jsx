import ClipLoader from "react-spinners/ClipLoader";
const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-[150px]">
      <ClipLoader size={150} color={"#C7C8CC"} />
    </div>
  );
};

export default Spinner;
