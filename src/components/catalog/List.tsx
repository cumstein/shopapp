"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { fetchImages } from "@/modules/products/services/image";
import { PrismaType } from "@/lib/prisma";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import Link from "next/link";

function CatalogList() {
  const params = useSearchParams();
  const id = params.get("id");
  const [images, setImages] = useState<PrismaType.Image[] | null>(null);
  const getImages = async () => {
    if (id) {
      const data = await fetchImages(id);
      setImages(data.images);
    }
  };
  useEffect(() => {
    getImages();
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center mb-4">
      {images?.map((_image: any, index) => {
        return (
          <div className="p-1" key={index}>
            <Card>
              <CardContent className="flex w-[400px] h-[400px] items-center justify-center p-6">
                <Image
                  src={_image?.image}
                  alt="gallery"
                  width={400}
                  height={400}
                  className="hover:scale-105 transform transition-transform duration-300"
                />
              </CardContent>
            </Card>
          </div>
        );
      })}
      <Button variant="outline" asChild>
        <Link href="/products">Back</Link>
      </Button>
    </div>
  );
}

export default CatalogList;
