import React, { useEffect } from 'react';

const PayPalButton = ({ amount, onSuccess }) => {
  useEffect(() => {
    // Function to dynamically load PayPal SDK
    const loadPayPalScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD`;
      script.async = true;
      script.onload = () => {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount, // Dynamic amount from props
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
              onSuccess(details); // Handle successful payment
            });
          },
        }).render('#paypal-button-container');
      };
      document.body.appendChild(script);
    };

    // Check if PayPal Buttons already exist; if not, load the SDK
    if (typeof window.paypal === 'undefined') {
      loadPayPalScript();
    } else {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            onSuccess(details);
          });
        },
      }).render('#paypal-button-container');
    }
  }, [amount]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
