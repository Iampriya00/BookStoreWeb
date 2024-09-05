import React from "react";

function about() {
  return (
    <>
      <div className="py-12 text-5xl font-bold text-center">
        <h2>About Us</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 p-12 tab:grid-cols-1">
        <div className="m-auto ">
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam alias culpa reprehenderit libero nulla quasi suscipit vitae,
            sint consequatur?
          </p>
        </div>
        <div>
          <img src="/image/image.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default about;
