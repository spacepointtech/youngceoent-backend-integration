// pages/api/verify-payment.js

const crypto = require("crypto");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { orderId, paymentId, signature } = req.body;

    // Create a HMAC SHA256 hash using the order_id and payment_id with the key secret
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + "|" + paymentId)
      .digest("hex");

    if (signature === expectedSignature) {
      // Payment is verified
      res.status(200).json({ success: true });
    } else {
      // Payment failed
      res.status(400).json({ success: false });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
