// src/controllers/paymentController.js
import axios from 'axios';
import Transaction from '../models/transactionModel.js';

export const verifyPayment = async (req, res) => {
  const { reference } = req.body;

  try {
    // Verify the payment using Paystack's API
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const { status, data } = response.data;

    if (status && data.status === 'success') {
      // Save the transaction to the database
      await Transaction.create({
        reference: data.reference,
        email: data.customer.email,
        amount: data.amount,
        status: data.status,
      });

      return res.status(200).json({
        status: 'success',
        message: 'Payment verified and saved successfully',
        data: data,
      });
    } else {
      return res.status(400).json({
        status: 'failure',
        message: 'Payment verification failed',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Server error during payment verification',
      error: error.message,
    });
  }
};
