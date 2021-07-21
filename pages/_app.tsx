import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { appWithTranslation } from "@i18n";
import Head from "next/head";
import { GameContextProvider } from "@utils/context";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GameContextProvider>
                <Component {...pageProps} />
            </GameContextProvider>
        </>
    );
}

export default appWithTranslation(MyApp);
