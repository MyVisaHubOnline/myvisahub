import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import FormCards from "../components/FormCards/index";
import HomeNumbers from "../components/HomeNumbers";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import { saveUtmsOnCookies } from "../util/utmsUtils";

function Home() {
  useEffect(() => {
    saveUtmsOnCookies();
  });

  return (
    <>
      <Layout title="My Passport Hub">
        <div className="page-homepage7-bg"></div>
        <FormCards />
        <HomeNumbers />
        <HowItWorks />
        <WhyChooseUs />
        <Services />
      </Layout>
    </>
  );
}

export default Home;
