import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { Link } from "lucide-react";
import Image from "next/image";

const Ads = () => {
  return (
    <Card className="w-3/4 flex justify-between items-center overflow-hidden">
      <div>
        <CardHeader>
          <CardTitle>On Sale products</CardTitle>
          <CardDescription>
            Buy outdated products with 50% discount
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button>
            <Link href="/products">Products</Link>
          </Button>
        </CardFooter>
      </div>
      <Image
        src="/assets/ads.jpg"
        width={200}
        height={200}
        alt="ads"
        className="rounded-tr-lg rounded-br-lg object-fit"
      />
    </Card>
  );
};

export default Ads;
