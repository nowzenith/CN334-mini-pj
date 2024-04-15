import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#fefcfa]">
      <Component {...pageProps}/>
    </div>
   );
}

export default MyApp;
