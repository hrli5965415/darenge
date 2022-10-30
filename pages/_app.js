import { Provider } from "react-redux";
import { ThemeLayout } from "../components/layout/ThemeLayout";
import { store } from "../redux/store";
import "../styles/theme.css";
import "../styles/globals.css";
import "../styles/prism-atom-dark.css";
import "../styles/doc.css";
import "plyr/dist/plyr.css";
import "plyr-react/plyr.css";
//import "@vidstack/player/hydrate.js";
import "video.js/dist/video-js.css";

import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Darenge</title>
      </Head>
      <Provider store={store}>
        <ThemeLayout>
          <Component {...pageProps} />
        </ThemeLayout>
      </Provider>
    </>
  );
}

export default MyApp;
