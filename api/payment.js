import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    const razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // Convert to smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };

    try {
      const order = await razorpayInstance.orders.create(options);
      res.status(200).json({ order });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
