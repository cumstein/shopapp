import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import Image from 'next/image';

const Ads = () => {
  return (
    <Card className="w-3/4 flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden p-2">
      <div>
        <CardHeader className='flex justify-center items-center'>
          <CardTitle>On Sale products</CardTitle>
          <CardDescription className='justify-center items-center'>
            Buy outdated products with 50% discount
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className='justify-center items-center'>Buy Now</Button>
        </CardFooter>
      </div>
      <Image
        src="/assets/ads.jpg"
        width={200}
        height={200}
        alt="ads"
        className="rounded-tr-lg rounded-br-lg object-scale-down"
      />
    </Card>
  );
};

export default Ads;
