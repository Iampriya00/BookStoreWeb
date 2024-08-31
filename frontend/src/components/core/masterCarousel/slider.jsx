import * as React from "react";
import styles from "@/components/core/masterCarousel/slider.module.css";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Slider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl m-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="py-16 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="rounded-none">
                <CardHeader className={styles.cardImage}>
                  <Skeleton className="h-[125px] w-full rounded-none flex justify-center items-center text-xl">
                    Images {index + 1}
                  </Skeleton>
                </CardHeader>
                <CardDescription className="p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore, reiciendis! Iusto nesciunt quibusdam sunt porro.
                </CardDescription>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-none" variant={"carso"} />
      <CarouselNext className="border-none" variant={"carso"} />
    </Carousel>
  );
}
