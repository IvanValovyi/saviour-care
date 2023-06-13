import Header from "@/components/Header";
import Intro from "@/components/Intro";
import OfferServices from "@/components/OfferServices";
import OptionsList from "@/components/OptionsList";
import CustomersSlider from "@/components/CustomersSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <OfferServices />
      <OptionsList />
      <CustomersSlider />
      <Footer />
    </>
  );
}
