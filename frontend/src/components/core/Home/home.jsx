import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

function Home() {
  return (
    <>
      <div className="w-full p-12">
        <div className="grid grid-cols-2 gap-4 tab:grid-cols-1">
          <div className="leftSide">
            <h1 className="text-3xl font-bold">Welcome to our website</h1>
            <p className="py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis ullam dignissimos neque ipsa doloribus in non, odio et
              sed pariatur aliquid ratione debitis. Molestiae velit quod cum
              aperiam accusantium quas!
            </p>
            <div className="flex">
              <div className="w-full pr-4">
                <Input type="email" placeholder="Email" />
              </div>
              <Button>Register now</Button>
            </div>
          </div>
          <div className="rightSide">
            <img src="./components/image/book1.jpg" alt="Book" />
          </div>
        </div>
      </div>
      <div className="w-full p-12">
        <h1 className="text-center text-3xl font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="grid grid-cols-2 gap-4 tab:grid-cols-1">
          <div className="rightSide pt-5">
            <img src="./components/image/book1.jpg" alt="Book" />
          </div>
          <div className="leftSide pt-5">
            <div className="flex">
              <span className=" pr-[4px] text-xxl">
                <ChevronRight />
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis ullam dignissimos neque ipsa doloribus in non, odio et
                sed pariatur aliquid ratione debitis. Molestiae velit quod cum
                aperiam accusantium quas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
