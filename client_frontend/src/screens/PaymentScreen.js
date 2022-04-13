import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterNew from "../components/FooterNew";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [cashMethod, setCashMethod] = useState("Cash on Delivery");
  const [benefitMethod, setBenefitMethod] = useState("BenefitPay");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  const submitCash = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(cashMethod));
    history.push("/placeorder");
  };

  const submitBenefit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(benefitMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center paymentFooter">
        <h4>SELECT PAYMENT METHOD</h4>
        <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={submitCash}>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="buttonCash"
                type="submit"
                value={cashMethod}
                onChange={(e) => setCashMethod(e.target.value)}
              />
            </div>
          </div>
        </form>
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitBenefit}
        >
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="buttonBenefit"
                type="submit"
                value={benefitMethod}
                onChange={(e) => setBenefitMethod(e.target.value)}
              />
            </div>
          </div>
        </form>
        {/* <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="buttonPayPal"
                type="submit"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
          </div>
        </form> */}
      </div>
      <FooterNew />
    </>
  );
};

export default PaymentScreen;
