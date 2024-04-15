import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
    <div className="px-4 py-16 bg-[#F9F3EC]"> {/* Optional background color */}
        <div className="flex flex-col md:flex-row md:space-x-36 md:items-center-1/2">
          <div className="pl-40 w-full md:w-2/5 md:items-center ">
            <Image
              src="/home_banner.png"
              alt="Promotional banner for pet products and services"
              width={530}
              height={560}
              sizes="33vw"
              style={{ width: "30%", height: "auto", align: "center" ,paddingLeft: '15%'}}
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
