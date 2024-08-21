// pages/api/create-order.js

const Razorpay = require("razorpay");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, currency } = req.body;

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,  // Replace with your Razorpay Key ID
      key_secret: process.env.RAZORPAY_KEY_SECRET,  // Replace with your Razorpay Key Secret
    });

    // Create order options
    const options = {
      amount: amount * 100,  // Amount in smallest currency unit (i.e., paisa for INR)
      currency: currency,
      payment_capture: 1,  // Auto capture the payment
    };

    try {
      // Create an order
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: "Failed to create order" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
