import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const paymentinstripe = price * 100;
  const publishKey =
    "pk_test_51ItnNcSHWaZqT3GjpWKyPRCJOoyn6AmqARDVP4bUfNhb5f46mEZjKe2HAhkoknPIfOWgiMB26ntz8HvLVMYFcpA400Jv6IXIzG";
  const onToken = (token) => {
    console.log(token);
    alert("Payment done succefully");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kaaks Clothing LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={paymentinstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};
export default StripeButton;
