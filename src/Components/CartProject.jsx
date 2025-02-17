import React from "react";
import { cart } from "./Lib/CartProject";

const CartProject = () => {
  if (!cart?.length) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <p className="text-gray-500">No projects available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      
      <div className="flex flex-wrap justify-center">
        {cart.map(({ id, Title, Description, Link, Img }) => (
          <div key={id} className="m-4 p-6 bg-white rounded-lg shadow-md w-80">
            {Img && <img src={Img} alt={Title} className="rounded-t-lg mb-4" />}
            <h2 className="text-xl font-semibold mb-2">{Title}</h2>
            <p className="text-gray-600 mb-4">{Description}</p>
            <div className="flex justify-between">
              <a href={Link || "#"} className="bg-gray-200 text-black py-2 px-4 rounded-lg">
                {Link ? "GitHub" : "No GitHub"}
              </a>
              {Link && (
                <a href={Link} className="bg-black text-white py-2 px-4 rounded-lg">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProject;
