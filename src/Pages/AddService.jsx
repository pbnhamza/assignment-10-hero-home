import React, { use } from "react";
import { AuthContext } from "../Components/context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddService = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ProviderName: e.target.name.value,
      Category: e.target.category.value,
      Description: e.target.description.value,
      ImageURL: e.target.thumbnail.value,
      PhoneNumber: e.target.number.value,
      Email: user.email,
      ServiceName: e.target.service.value,
      Price: e.target.price.value,
    };

    fetch("http://localhost:3000/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Data Add Successful");
        console.log(data);
        navigate("/my-service");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-5 px-5">
      <div className=" border border-[#4562FA] w-full max-w-lg mx-auto rounded-2xl shadow-3xl ">
        <div className="card-body p-6 relative rounded-2xl  ">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add New Service
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between gap-5 ">
              {/* Name Field */}
              <div>
                <label className="label font-medium"> Provider Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                  placeholder="Provider Name"
                />
              </div>
              <div>
                <label className="label font-medium"> Service Name</label>
                <input
                  type="text"
                  name="service"
                  required
                  className="input w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                  placeholder="Service Name"
                />
              </div>
            </div>
            <div className="flex items-center justify-between  ">
              <div>
                <label className="label font-medium">Price</label>
                <input
                  type="text"
                  name="price"
                  required
                  className="input w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Price"
                />
              </div>

              {/* Category Dropdown */}
              <div className="">
                <label className="label font-medium">Category</label>
                <select
                  defaultValue={""}
                  name="category"
                  required
                  className="select w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Electricians">Electricians</option>
                  <option value="Plumbers">Plumbers</option>
                  <option value="Cleaners">Cleaners</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label font-medium">Phone Number</label>
              <input
                type="text"
                name="number"
                required
                className="input w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                placeholder="Enter Phone Number"
              />
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input w-full rounded-2xl focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              style={{
                background:
                  " radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
              }}
              type="submit"
              className="btn w-full text-white mt-6 rounded-2xl  hover:from-pink-600 hover:to-red-700"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
