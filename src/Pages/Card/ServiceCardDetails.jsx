import { Link, useLoaderData } from "react-router";

const ServiceCardDetails = () => {
  const serviceData = useLoaderData();
  const data = serviceData.result;
  console.log(data);
  const {
    ProviderName,
    ImageURL,
    Category,
    ServiceName,
    Description,
    Email,
    PhoneNumber,
    Price,
  } = data;

  //   const navigate = useNavigate();

  //   const handleDelete = () => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         fetch(``, {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             navigate("/all-models");

  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //     });
  //   };
  return (
    <div>
      <div className="max-w-5xl mx-auto p-4 md:p-2 lg:p-2">
        <div
          className="  shadow-xl border border-gray-200 rounded-2xl overflow-hidden"
          style={{
            background:
              " radial-gradient(circle,rgba(63, 94, 251, .9) 0%, rgba(252, 70, 107, .2) 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={ImageURL}
                alt=""
                className="w-full object-cover rounded-xl shadow-md"
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
                <Link
                  to={`/update-service/${data._id}`}
                  className=" p-2  rounded bg-linear-to-r from-[#48345B] to-[#3F5BEF] text-white border-0 hover:from-pink-500 hover:to-red-800"
                >
                  Update Service
                </Link>
                <button
                  //   onClick={handleDelete}
                  className=" p-2  rounded bg-linear-to-r from-[#48345B] to-[#3F5BEF] text-white border-0 hover:from-pink-500 hover:to-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
