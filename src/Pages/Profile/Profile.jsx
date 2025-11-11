import { useContext } from "react";

import { AuthContext } from "../../Components/context/AuthContext";
import { Link } from "react-router";
import Login from "../../Components/Auth/Login";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div
          className="flex justify-center items-center flex-col gap-5 py-4 "
          style={{
            background:
              "linear-gradient(360deg,rgba(63, 94, 251, 1)  0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
          }}
        >
          <div
            className="rounded"
            style={{
              background:
                "linear-gradient(180deg,rgba(63, 94, 251, 1)  0%, rgba(125, 107, 107, 1)  60%, rgba(83, 237, 198, .45) 100%)",
            }}
          >
            <div className="flex justify-center items-center py-4">
              <img
                src={user?.photoURL || ""}
                className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
              />
            </div>
            <div className=" bg-primary rounded space-y-2 p-4 w-[400px] ">
              <div className="flex justify-center items-center gap-5 text-xl">
                <div>
                  <h1 className="font-semibold text-white py-1 text-right">
                    Name:
                  </h1>
                  <h1 className="font-semibold text-white py-1 text-right">
                    Email:
                  </h1>
                </div>
                <div>
                  <h1 className="font-semibold text-white py-1">
                    {user?.displayName}
                  </h1>
                  <h1 className="font-semibold text-white py-1">
                    {user?.email}
                  </h1>
                </div>
              </div>

              <div className="flex justify-center py-4">
                <Link
                  to={"/update-profile"}
                  className="btn btn-primary bg-secondary"
                >
                  Update Profile
                </Link>
              </div>
              <h1 className=" text-white py-1 text-center">
                {user?.metadata.lastSignInTime}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};

export default Profile;
