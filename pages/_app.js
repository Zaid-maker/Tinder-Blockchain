import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://asx3caoksmxe.usemoralis.com:2053/server"
      appId="Mk24PDWQHRk6iIowzVh1iZHSrnRqgUs1rfpFxumx"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
