// // app/api/stripe/webhook/route.ts
// import { NextRequest } from "next/server";
// import Stripe from "stripe";
// import { db } from "@/lib/firebase-admin";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-05-28.basil",
// });

// export async function POST(req: NextRequest) {
//   const rawBody = await req.text();
//   const sig = req.headers.get("stripe-signature")!;

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       rawBody,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//   } catch (err) {
//     if (err instanceof Error) {
//       return new Response(`Webhook Error: ${err.message}`, { status: 400 });
//     }
//     return new Response("Unknown error", { status: 400 });
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object as Stripe.Checkout.Session;

//     const userId = session.metadata?.userId;
//     const customerId = session.customer;

//     if (userId) {
//       await db.collection("users").doc(userId).set(
//         {
//           stripeCustomerId: customerId,
//           isSubscribed: true,
//           subscribedAt: new Date().toISOString(),
//         },
//         { merge: true }
//       );
//     }
//   }

//   return new Response("Webhook received", { status: 200 });
// }
export async function POST() {
  // your code
}