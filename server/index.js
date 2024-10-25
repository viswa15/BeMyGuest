import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import staticContentRoute from "./routes/staticContentRoute.js";
import featuredWeddingRoute from "./routes/featuredWeddingRoute.js";
import Stripe from 'stripe';


//configure env
dotenv.config();

const stripe = new Stripe('sk_test_51QDSJlEKPFFf3t4J6WnX2awoLb6hViTVJiL8uCeYWyaYl4SvkLORdcsU04qDaqm9n60Vw74YpSFAnggikc8KSqyV008Hc8dGJx'); // Use your Stripe secret key


//database configuration
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Or specify allowed origins (do after frontend deployment)
// app.use(cors({
//     origin: 'https://your-frontend-domain.com',
//   }));

//routes
app.use("/auth", authRoute);
app.use("/static-content", staticContentRoute);
app.use("/weddings", featuredWeddingRoute);

// Endpoint to create a Checkout session
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'], // You can add more payment methods like 'ideal', 'klarna', etc.
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Sample Product',
          },
          unit_amount: 5000, // Amount in cents ($50.00)
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://bemyguest-8bla.onrender.com/',
    cancel_url: 'https://bemyguest-8bla.onrender.com/',
  });

  res.json({ id: session.id });
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
