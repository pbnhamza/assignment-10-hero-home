import { useContext, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Components/context/AuthContext";
const ServiceBookDetailsCard = () => {
  const serviceData = useLoaderData();
  const card = serviceData.result;
  const bookModalRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]); // local array state
  const [comments, setComments] = useState("");
  console.log(reviews);

  const handleBooKModal = () => {
    bookModalRef.current.showModal();
  };

  const handleReview = (e) => {
    e.preventDefault();
    const createArray = {
      name: user?.displayName,
      email: user?.email,
      date: new Date().toLocaleDateString(),
      comments,
    };
    console.log(createArray);
    const updatedReviews = [...reviews, createArray];
    setReviews(updatedReviews);
    setComments("");
  };

  const {
    ProviderName,
    ImageURL,
    Category,
    PhoneNumber,
    ServiceName,
    _id,
    Price,
    Email,
    Description,
  } = card;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-2 lg:p-2">
      <div
        className="  shadow-xl border border-gray-200 rounded-2xl overflow-hidden"
        style={{
          background:
            " radial-gradient(circle,rgba(631, 94, 251, 1) 0%, rgba(63, 94, 251, 1) 100%)",
        }}
      >
        <div className="flex flex-col md:flex-row-reverse gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2 border-2 border-white rounded-xl shadow-md">
            <img
              src={ImageURL}
              alt=""
              className="w-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center space-y-2 w-full md:w-1/2 px-5 text-left">
            <div className="flex  items-center text-lg gap-2  ">
              {/* Title */}
              <h1 className="w-30 font-bold"> Name</h1>
              <h1 className="">{ProviderName}</h1>
            </div>

            <div className="flex  items-center text-lg gap-2  ">
              {/* Service Name*/}
              <h1 className="w-30 font-bold"> Service</h1>
              <h1>{ServiceName}</h1>
            </div>

            <div className="flex  items-center text-lg gap-2  ">
              {/* Category Badge */}
              <h1 className="w-30 font-bold">Category</h1>
              <div>{Category}</div>
            </div>

            <div className="flex  items-center text-lg gap-2 ">
              {/*  Price */}
              <h1 className="w-30 font-bold"> Price</h1>
              <div className="font-medium">{Price}</div>
            </div>

            <div className="flex  items-center text-lg gap-2">
              {/* Email*/}
              <h1 className="w-30 font-bold"> Email</h1>
              <h1>{Email}</h1>
            </div>

            <div className="flex  items-center text-lg gap-2  ">
              {/*  PhoneNumber*/}
              <h1 className="w-30 font-bold  ">Phone</h1>
              <h1>{PhoneNumber}</h1>
            </div>

            <div className=" items-center text-lg gap-2 ">
              {/* Description */}
              <h1 className="w-30 font-bold ">Description</h1>
              <p className="leading-relaxed text-base ">{Description}</p>
            </div>

            {/* Optional: Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleBooKModal}
                className=" p-2  rounded bg-linear-to-r from-[#48346D] to-[#3F6BDA] text-white border-2 hover:from-pink-500 hover:to-red-800"
              >
                Book Now
              </button>
              <Link
                to={"/my-service"}
                className=" p-2  rounded bg-linear-to-r from-[#48346D] to-[#3F6BDA] text-white border-2 hover:from-pink-500 hover:to-red-800"
              >
                Back Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <dialog ref={bookModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="rounded-2xl bg-purple-50 p-5  items-end justify-center">
          <form onSubmit={handleReview}>
            <label className="font-semibold text-gray-700">
              Write a Review
            </label>
            <textarea
              required
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full text-gray-600 border p-2 rounded-md mt-1"
              placeholder="Write your Comments..."
            ></textarea>
            <div className="flex justify-center items-center gap-5">
              <div>
                <button
                  type="submit"
                  className=" bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
              <div>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className=" bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceBookDetailsCard;
