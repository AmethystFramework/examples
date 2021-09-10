import { client } from "../mod.ts";

client.eventHandlers.ready = () => {
  console.log("Successfuly logged in!");
};
