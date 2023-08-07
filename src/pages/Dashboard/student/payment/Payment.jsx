import React from 'react';
import Heading from '../../../../components/shared/Heading/Heading';
import Subtitle from '../../../../components/shared/Heading/Subtitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm';




const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

  

 

    return (
      <div>
        <Heading title="Payment" center primary />
        <Subtitle label="Please Process" center />
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
};

export default Payment;