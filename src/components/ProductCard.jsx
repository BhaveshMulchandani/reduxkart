import { useDispatch } from "react-redux";
import { addtocart } from "../redux/cartSlice";
import { addtowishlist } from "../redux/wishListSlice";

const ProductCard = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: "Nike Bag",
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Adidas Bag",
      image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white text-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col items-center"
        >
          <img
            className="w-60 h-60 object-cover rounded-lg mb-4"
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <div className="flex gap-4 w-full">
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={() => dispatch(addtocart(item))}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
              onClick={() => dispatch(addtowishlist(item))}
            >
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
