import { SimpleClient } from "./deps.ts";

const client = new SimpleClient({
  token: "input your token here",
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.eventHandlers.ready = () => {
  console.log("Successfuly logged in!");
};

client.eventHandlers.messageCreate = (message) => {
  if (message.content.startsWith("!ping ")) return message.send("Pong!");
};

client.start();
