import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Product() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Test page</h1>
          <p className="text-zinc-600 font-light mt-2">
            This is a product page,
            <Link href="/">
              <a className="mx-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#D9A94C] to-[#E136B8] shadow-red-500/50">
                click here
              </a>
            </Link>
            to return to the home page.
          </p>
        </div>
      </main>
    </div>
  );
}
