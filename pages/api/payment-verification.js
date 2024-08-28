import Razorpay from 'razorpay';
import { connectToDatabase } from '@/backend/utils/db';
import User from '@/backend/models/User'; // Assuming you have a User model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { payment_id, order_id, signature, user_id, plan } = req.body;

    try {
      // Initialize Razorpay instance
      const razorpay = new Razorpay({
        key_id: process.env.rzp_test_X1UAp9czS3Iou5,
        key_secret: process.env.BQ8ZR5LI8rdalksQwMIBKKvK, // key secret
      });

      // Verify payment signature using Razorpay's SDK
      const isValidSignature = razorpay.utils.validateWebhookSignature(
        `${order_id}|${payment_id}`,
        signature,
        process.env.BQ8ZR5LI8rdalksQwMIBKKvK  // key secret
      );

      if (isValidSignature) {
        // Connect to the database
        await connectToDatabase();

        // Update user subscription status in the database
        await User.findByIdAndUpdate(user_id, {
          subscription: {
            plan: plan,
            status: 'active',
          },
        });

        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid signature' });
      }
    } catch (error) {
      console.error('Payment verification error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
