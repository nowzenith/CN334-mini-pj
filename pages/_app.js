import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-orange-200">
      <Component {...pageProps}/>
    </div>
   );
}

export default MyApp;
