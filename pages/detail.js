import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Test() {
    return (
        <div>
            <Head>
                <title>Product Page</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <Navbar />
            <div className="bg-[#fefcfa]">
                <div className="detail">
                <div className="max-w-4xl mx-auto py-20 px-4 sm:px-2 lg:px-8 ">
                    <div className="flex flex-col md:space-x-20 md:flex-row md:items-center bg-white p-10 shadow-lg">
                        <div className="md:flex-shrink-0">
                            <Image
                                className="rounded-md"
                                src="/product-feeder.jpg"
                                alt="White food container labeled Harry Barker Dog Food"
                                width={350}
                                height={350}
                            />
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <h2 className="text-4xl tracking-tight text-gray-800">Food Container</h2>
                            <div className="mt-3 flex items-center">
                                <div className="text-yellow-600 text-md">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="ml-2 text-sm text-gray-400">5.0</div>
                            </div>
                            <p className="mt-2 text-gray-500 text-3xl font-semibold">$70.00</p>
                            <p className="mt-4 text-sm text-gray-700">
                                Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
                            </p>
                            <div className="mt-8">
                            <button className="bg-white hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center border border-black">
                                    <span>back</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <footer className="h-20 mt-8 text-center text-gray-500">  
                    <p>W A G G Y</p>
                    <p className='line_down'>Best Destination For Your Pets</p>
                </footer>
            </div>
        </div>
    );
}
