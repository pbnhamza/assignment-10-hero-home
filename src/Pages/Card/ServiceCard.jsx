import { Link } from "react-router";

const ServiceCard = ({ card }) => {
  const { ProviderName, ImageURL, Category, ServiceName, _id, Price } = card;
  return (
    <div className="py-5 ">
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <figure className="h-48 overflow-hidden">
          <img
            src={ImageURL}
            alt="#"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body flex">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{ProviderName}</h2>
            <div className="badge p-2 text-xs badge-xs badge-secondary rounded-full">
              {Category}
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <h2 className="card-title">{ServiceName}</h2>
            <h2 className="card-title text-[#596FF8]">{Price}Tk.</h2>
          </div>

          {/* <p className="text-sm text-base-content/70">by {author}</p> */}
          <div className="card-actions justify-between items-center mt-4">
            <Link
              to={`/service-details/${_id}`}
              style={{
                background:
                  " radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
              }}
              className="btn rounded-full  hover:to-pink-500 text-white w-full btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
