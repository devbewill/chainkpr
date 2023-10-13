import { League_Gothic, Inter, Poppins, Cabin } from "next/font/google";
import "@/styles/globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "600", "900"],
  subsets: ["latin"],
});
const cabin = Cabin({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --poppins-font: ${poppins.style.fontFamily};
          --cabin-font: ${cabin.style.fontFamily};
          --leagueGothic-font: ${leagueGothic.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
