import { League_Gothic, Poppins, Cabin, Lora } from "next/font/google";
import "@/styles/globals.css";

const leagueGothic = League_Gothic({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
});
const cabin = Cabin({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --cabin-font: ${cabin.style.fontFamily};
          --leagueGothic-font: ${leagueGothic.style.fontFamily};
          --lora-font: ${lora.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
