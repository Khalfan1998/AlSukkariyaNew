import React from "react";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import FooterNew from "../components/FooterNew";
import Navbar from "../components/Navbar";
import FooterNewest from "../components/FooterNewest";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      {/* <CalltoActionSection /> */}
      {/* <ContactInfo /> */}
      <FooterNewest />
    </div>
  );
};

export default HomeScreen;
