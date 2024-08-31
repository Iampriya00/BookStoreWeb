import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full p-12">
        <div className="grid grid-cols-2 gap-4 tab:grid-cols-1">
          <div className="m-auto leftSide">
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
            {isLoading ? (
              <Skeleton className="w-full h-full rounded-xl" />
            ) : (
              <img src="/image/book2.png" alt="Book" />
            )}
          </div>
        </div>
      </div>
      <div className="w-full p-12">
        <h1 className="text-3xl font-bold text-center">
          Lorem ipsum dolor sit amet.
        </h1>
        <div className="grid grid-cols-2 gap-4 tab:grid-cols-1">
          <div className="pt-5 rightSide">
            <img src="/image/book1.jpg" alt="Book" />
          </div>
          <div className="flex items-center pt-5 leftSide">
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
      <div className="w-full p-12 bg-slate-100">
        <div>
          <h3 className="mb-3 text-3xl text-center">
            Lorem ipsum dolor sit amet.
          </h3>
          <p className="mb-3 text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            quidem.
          </p>
          <p className="mb-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in iure
            ea. Consequatur fuga magnam dignissimos impedit, enim quod culpa?
          </p>
          <div className="grid grid-cols-3 gap-4 tab:grid-cols-1">
            <figure>
              <a href="#">
                <Skeleton className="h-[125px] w-full rounded-xl bg-white" />
              </a>
              <figcaption className="mt-4 text-xl font-semibold text-center">
                Lorem, ipsum.
              </figcaption>
            </figure>
            <figure>
              <a href="#">
                <Skeleton className="h-[125px] w-full rounded-xl bg-white" />
              </a>
              <figcaption className="mt-4 text-xl font-semibold text-center">
                Lorem, ipsum.
              </figcaption>
            </figure>
            <figure>
              <a href="#">
                <Skeleton className="h-[125px] w-full rounded-xl bg-white" />
              </a>
              <figcaption className="mt-4 text-xl font-semibold text-center">
                Lorem, ipsum.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
