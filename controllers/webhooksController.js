require("dotenv").config();
const User = require("../models/User");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.stripewebhook = (req, res) => {
  let data;
  let eventType;
  const webhookSecret = process.env.WEBHOOK_SECRET_KEY;
  // eslint-disable-next-line
  console.log("## webhookSecret:", webhookSecret);
  if (webhookSecret) {
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }
  // eslint-disable-next-line
  console.log("## eventType:", eventType);
  switch (eventType) {
    case "payment_intent.succeeded":
      // eslint-disable-next-line
      console.log('update user....')
      const updateUser = async () => {
        try {
          await User.findByIdAndUpdate(
            data.object.metadata.userId,
            {
              subscribtion: new Date(),
            },
            { new: true }
          );
        } catch (err) {
          console.log(err);
        }
      };
      updateUser();
      break;
    default:
  }
  res.sendStatus(200);
};
