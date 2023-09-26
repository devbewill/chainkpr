import { League_Gothic, Inter } from "next/font/google";
import "@/styles/globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --leagueGothic-font: ${leagueGothic.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
