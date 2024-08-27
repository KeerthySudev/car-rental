// Home page

// Import necessary components

import TopBar from "@/components/top-bar/Topbar";
import Search from "@/components/second-row/Search";
import Banner from "@/components/banner/Banner";
import Cars from "@/components/third-row/Cars";
import FourthRow from "@/components/fourth-row/FourthRow";
import Steps from "@/components/Rent/Steps";
import Locations from "@/components/Locations/Locations";
import Questions from "@/components/Questions/Questions";
import Footer from "@/components/footer/footer";

// Define the Home component

export default function Home() {
  return (
    <main className="container">
      <TopBar />
      <Search />
      <Banner />
      <Cars />
      <FourthRow />
      <Steps />
      <Locations />
      <Questions />
      <Footer />
    </main>
  );
}
