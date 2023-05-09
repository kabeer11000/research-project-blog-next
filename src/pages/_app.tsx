import type { AppProps } from 'next/app'
import {Fragment} from "react";
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// });

export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    {/*<main className={roboto.className}>*/}
      <Component  {...pageProps} />
    {/*</main>*/}
  </Fragment>
}
