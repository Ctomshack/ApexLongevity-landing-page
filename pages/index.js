import Head from "next/head";
import Link from "next/link";
import Benefits1 from "../components/Benefits1";
import Benefits2 from "../components/Benefits2";
import Benefits3 from "../components/Benefits3";
import ContactUs from "../components/ContactUs";
import Content1 from "../components/Content1";
import ConvertPatients from "../components/ConvertPatients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import How from "../components/How";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex Longevity</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div>
        {/* <nav className="block p-4">
          <div className="flex items-center justify-between">
            <Link href="/">
            <div className="logo">Logo</div>
            </Link>
            <div className="flex justify-around">
              <div className="navItem">Page One</div>
              <div className="navItem">The Sequel</div>
              <div className="navItem">Three Makes a Trilogy</div>
              <div className="navItem">Four is Excessive</div>
              <div></div>
            </div>
          </div>
        </nav> */}
        {/* --- nav --- */}


        <Header />
        <Benefits1 />
        <TrustedBy />
        <Content1 />
        <Benefits2 />
        <Header2 />
        <Benefits3 />
        <ConvertPatients />
        <How />
        <ContactUs />
        <Footer />
      </div>

    </div>
  );
}
