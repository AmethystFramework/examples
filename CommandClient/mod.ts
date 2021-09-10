import { CommandClient } from "./deps.ts";

export const client = new CommandClient({
  token: "input your token here",
  intents: ["Guilds"],
  prefix: "!",
  dirs: {
    commands: "./commands/",
    events: "./events/",
  },
});

client.eventHandlers.commandAdd = (command) => {
  console.log(`Successfuly added command with name ${command.name}`);
};

client.eventHandlers.commandStart = (command) => {
  console.log(`Executing command with name ${command.name}...`);
};

client.eventHandlers.commandEnd = (command) => {
  console.log(`Successfuly executed command with name ${command.name}`);
};

client.addCommand({
  name: "ping",
  execute(ctx) {
    ctx.message.send("Pong!");
  },
});

client.start();
