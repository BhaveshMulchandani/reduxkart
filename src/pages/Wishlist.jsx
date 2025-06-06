import React from "react";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlistitems);
  return (
    <div>
      <Nav />
      Wishlist
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your wishlist</h2>
        {wishlist.length === 0 ? (
          <p>wishlist is empty</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
