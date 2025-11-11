import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/context/AuthContext";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhotos] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile(name, photo)
      .then(() => {
        if (name && photo) {
          toast.success("data update successful");

          setName("");
          setPhotos("");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
    navigate("/profile");
  };
  return (
    <div className="flex justify-center  py-5">
      <div className="flex justify-center items-center ">
        <div
          className="card-body   flex justify-center items-center border-2 border-white shadow-xl  rounded"
          style={{
            background:
              "linear-gradient(180deg,rgba(63, 94, 251, 1)  0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
          }}
        >
          <div className="flex justify-center items-center py-4 ">
            <img
              src={photo}
              className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
            />
          </div>
          <form>
            <fieldset className="fieldset space-y-2 ">
              <div className="join  w-96">
                <button className="bg-[#4B8DFA] join-item w-[100px]">
                  Name
                </button>
                <input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Your Name"
                  className="input  join-item  w-full"
                />
              </div>

              <div className="join relative w-96">
                <button className="bg-[#4B8DFA] join-item px-2 w-[100px]">
                  Photo
                </button>
                <input
                  onChange={(e) => setPhotos(e.target.value)}
                  value={photo}
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered join-item  w-full"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="btn btn-neutral border-none bg-[#4B8DFA] p-4"
              >
                Update Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
