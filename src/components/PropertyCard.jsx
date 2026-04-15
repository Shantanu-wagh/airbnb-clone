import { useState } from "react";

const PropertyCard = ({ data }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
      
      <img
        src={data.image}
        alt=""
        className="w-full h-52 object-cover rounded-t-xl"
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">{data.title}</h2>
          <button onClick={() => setLiked(!liked)}>
            {liked ? "❤️" : "🤍"}
          </button>
        </div>

        <p className="text-gray-500 text-sm">{data.location}</p>
        <p className="font-bold mt-1">₹{data.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;