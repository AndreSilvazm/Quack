import Header from "@/Components/Header";
import FirstCarousel from '@/Components/FirstCarousel'
import OurServices from "@/Components/OurServices";
import OurPartnes from "@/Components/OurPartnes";
import AvaliablePlaces from "@/Components/AvaliablePlaces";
import Footer from "@/Components/Footer";
import Head from "next/head";

export default function Home() {
  return (

    <section className="overflow-hidden">
      <Head>
        <title>Clube Quack</title>
        <meta
          name="description"
          content="Tenha acesso aos melhores serviços digitais!"
        />
      </Head>

      <Header />
      <FirstCarousel />
      <OurServices />
      <OurPartnes />
      <AvaliablePlaces />
      <Footer />

    </section>
  );
}
