import express from 'express';
import paypal from 'paypal-rest-sdk';

const router = express.Router();

// Configure PayPal
paypal.configure({
  mode: 'sandbox', // Use 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// Route to create a payment
router.post('/create-payment', (req, res) => {
  const { amount } = req.body;

  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    transactions: [{
      amount: {
        currency: 'USD',
        total: amount,
      },
      description: 'Your payment description',
    }],
    redirect_urls: {
      return_url: 'http://localhost:5000/api/paypal/success',
      cancel_url: 'http://localhost:5000/api/paypal/cancel',
    },
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Payment creation failed' });
    } else {
      res.json({
        paymentId: payment.id,
        links: payment.links,
      });
    }
  });
});

// Route to handle successful payment
router.get('/success', (req, res) => {
  const { paymentId, PayerID } = req.query;

  const execute_payment_json = {
    payer_id: PayerID,
    transactions: [{
      amount: {
        currency: 'USD',
        total: 'YOUR_TOTAL_AMOUNT', // Replace with actual amount or retrieve it
      },
    }],
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Payment execution failed' });
    } else {
      res.json({ payment });
    }
  });
});

// Route to handle canceled payment
router.get('/cancel', (req, res) => {
  res.send('Payment canceled');
});

export default router;
