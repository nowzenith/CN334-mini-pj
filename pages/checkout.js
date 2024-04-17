import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout Page</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar />
      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl mb-4">Make Your Checkout Here</h1>
        <p>Please register in order to checkout more quickly</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-checkout mx-auto rounded-md">
            <div className="form-container">
              <div className="form-section contact ">
                <form>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                  <label htmlFor="company">Address</label>
                  <input type="text" id="company" name="company" placeholder="Co. Inc (optional)" />
                  <label htmlFor="email">Country</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" required />
                </form>
              </div>
              <div className="form-section contact">
                <form>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                  <label htmlFor="company">Address</label>
                  <input type="text" id="company" name="company" placeholder="Co. Inc (optional)" />
                  <label htmlFor="email">Country</label>
                  <input type="email" id="email" name="email" placeholder="you@email.com" required />
                </form>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/home_banner.png"
                alt="Promotional banner for pet products and services"
                width={270}
                height={270}
              />
            </div>
          </div>
          {/* Order Summary section ... */}
          <div className="bg-white p-6 max-w-sm my-auto mx-auto rounded-lg shadow-md w-full">
            <div className="space-y-4">
              {/* Cart Totals */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Cart Totals</h2>
                <div className="w-12 h-1 bg-orange-400"></div>
              </div>
              <div className="flex justify-between pt-2">
                <p className="text-gray-600">Sub Total</p>
                <p className="text-gray-800">$118.00</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-gray-600">(+) Shipping</p>
                <p className="text-gray-800">$29.00</p>
              </div>
              <div className="flex justify-between pt-4 border-t">
                <p className="text-xl font-semibold text-gray-800">Total</p>
                <p className="text-xl font-semibold text-gray-800">$147.00</p>
              </div>

              {/* Payment Methods */}
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
                <div className="w-12 h-1 bg-orange-400"></div>
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <label className="flex items-center space-x-3 pt-2">
                  <input type="radio" name="payment" className="form-radio h-5 w-5 text-orange-600 mb-2" />
                  <span className="text-gray-700">Check Payments</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="form-radio h-5 w-5 text-orange-600 mb-2" />
                  <span className="text-gray-700">Cash On Delivery</span>
                </label>
                <label className="flex items-center space-x-3 pb-2">
                  <input type="radio" name="payment" className="form-radio h-5 w-5 text-orange-600 mb-2" />
                  <span className="text-gray-700">PayPal</span>
                </label>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-orange-500 text-white pt-3 mt-8 rounded hover:bg-orange-600 transition-colors">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
