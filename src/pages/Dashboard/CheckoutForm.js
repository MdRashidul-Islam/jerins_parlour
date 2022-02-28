import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../styles/Spinner";

const CheckoutForm = ({ services }) => {
  const { price, _id } = services;
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://boiling-shelf-38598.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1000,
      });
      setSuccess(false);
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Google Login successfully",
        showConfirmButton: false,
        timer: 800,
      });
      setSuccess(true);
      // console.log(paymentMethod);
    }
    //payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      Swal.fire({
        icon: "error",
        title: `${intentError.message}`,
        showConfirmButton: false,
        timer: 1000,
      });
      setSuccess(false);
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your payment processed successfully",
        showConfirmButton: false,
        timer: 800,
      });
      setSuccess(true);
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://boiling-shelf-38598.herokuapp.com/bookingService/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <Spinner />
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay - $ {price}
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
