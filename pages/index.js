import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/home_banner.png"
              alt="Promotional banner for pet products and services"
              width={500}
              height={500}
              sizes="33vw"
              style={{ width: "50%", height: "auto" }}
            // className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pl-4">
            <p className="text-xm font-bold text-gray-800">Save 20-85% OFF</p>
            <p className="text-7xl text-gray-700 responsive-text">Best</p>
            <p className="text-7xl text-gray-700 responsive-text">Destination For</p>
            <p className="text-7xl text-gray-700 responsive-text">Your Pets</p>
            <div className='flex items-center justify-center'><button className="bg-orange-400 text-black px-5 py-3 font-bold tracking-widest text-lg rounded-full w-fit">Shop Now</button></div>

          </div>
        </div>
      </div>
    </div>
  );
}
