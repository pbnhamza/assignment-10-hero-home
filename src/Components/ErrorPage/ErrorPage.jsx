import { Link } from "react-router";
import error from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="py-10 bg-[#1E1E1E] h-screen">
      <div className="flex justify-center ">
        <img className="w-[300px] h-[300px] pt-2" src={error} alt="" />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-white text-5xl">Oops, page not found!</h1>
        <p className="text-white py-2">
          The page you are looking for is not available.
        </p>
        <div className="py-4">
          <Link
            to={"/"}
            className=" btn items-center bg-[#65C178] py-2 px-4 text-white rounded"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
