import "../styles/global.css";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Loading...</p>;

  return <Component {...pageProps} />;
}
