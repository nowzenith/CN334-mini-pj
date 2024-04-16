import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Dog Bed',
    price: '$30',
    image: '/bed.jpg',
    alt: 'A comfortable brown dog bed with a sleeping dog.',
  },
  {
    id: 2,
    name: 'Dog Toy',
    price: '$18',
    image: '/product-toy.jpg',
    alt: 'A plush white dog toy shaped like a llama.',
  },
];

const ProductRow = ({ product }) => {
  return (
    <div className="grid grid-cols-9 items-center gap-4 py-2 border-b">
      <div className="col-span-2 flex justify-center">
        <Image src={product.image} alt={product.alt} width={100} height={100} />
      </div>
      <div className="col-span-2 text-center">{product.name}</div>
      <div className="col-span-1 text-center">{product.price}</div>
      <div className="col-span-3 flex justify-center items-center">
        <button className="px-3 py-1 border">-</button>
        <input type="text" className="mx-2 border text-center w-12" defaultValue="1" />
        <button className="px-3 py-1 border">+</button>
      </div>
      <div className="col-span-1 flex justify-center">
        <i className="fas fa-trash cursor-pointer"></i>
      </div>
    </div>
  );
};


export default function Cart() {
  return (
    <div>
      <Navbar />

      <>
        <Head>
          <title>Shopping Cart</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </Head>

        <div className="container mx-auto px-0 py-10">
          <div className="bg-orange-200 p-4">
            <div className="grid grid-cols-9 font-bold text-lg">
              <div className="col-span-2 text-center">Products</div>
              <div className="col-span-2 text-center">Name</div>
              <div className="col-span-1 text-center">Unit Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-1 text-center">Trash</div>
            </div>
          </div>

          <div className="mt-6">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>

          <div className="p-4 flex justify-between items-center mt-4 rounded">
            {/* Cart Total */}
            <div className="flex mt-6">
              <div className="flex-initial bg-orange-500 text-white font-bold py-2 px-4 text-center">
                Cart Total
              </div>
              <div className="flex-initial bg-orange-500 text-white font-bold py-2 px-4 text-center">
                $48
              </div>
            </div>
            <button className="bg-gray-600 text-white rounded-full px-6 py-2 flex items-center shadow-lg">
              CHECKOUT
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
