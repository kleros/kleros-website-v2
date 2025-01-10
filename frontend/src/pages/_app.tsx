import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={urbanist.className}>
      <Component {...pageProps} />
    </main>
  );
}
