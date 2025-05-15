import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

import IMG1 from './image/1.png';
import IMG2 from './image/2.png';
import IMG3 from './image/3.png';
import IMG4 from './image/4.png';
import Image from 'next/image';

function Banner() {
  return (
    <Carousel className="lg:w-[800px] md:w-[600px] w-[260px] ">
      <CarouselContent>
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square md:h-[400px] w-full flex items-center justify-center p-4">
                  <Image
                    src={image}
                    alt="banner"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-fill md:object-fill select-none mx-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
