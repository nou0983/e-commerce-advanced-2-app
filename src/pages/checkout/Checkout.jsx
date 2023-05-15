import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Wrapper from "./checkout.styles";
import { useProductsContext } from "../../contexts/ProductsContext";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { totalPrice } = useProductsContext();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: (totalPrice + 5) * 100 }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("There was an error from the server");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Wrapper>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Wrapper>
  );
};

export default Checkout;
