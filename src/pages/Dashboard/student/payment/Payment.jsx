import React from 'react';
import Heading from '../../../../components/shared/Heading/Heading';
import Subtitle from '../../../../components/shared/Heading/Subtitle';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../../hooks/useCart';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// console.log(stripePromise);

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

    const [cart] = useCart();

  const price = localStorage.getItem("price");
  console.log(price);
  console.log(price);
    return (
      <div>
        <Heading title="Payment" center primary />
        <Subtitle label="Please Process" center />
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    );
};

export default Payment;