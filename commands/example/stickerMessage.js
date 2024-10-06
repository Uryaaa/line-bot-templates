// Use the reply API to send the welcome message
module.exports = {
  command: "sticker",
  aliases: ["stamp"],
  category: "example",
  description: "Sticker message example",
  handler: (client, event) => {
    //
    client.replyMessage(event.replyToken, {
      type: "sticker",
      packageId: "1070",
      stickerId: "17843",
    });
  },
};
