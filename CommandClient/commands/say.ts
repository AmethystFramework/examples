import { CommandClass } from "../deps.ts";

export class SayCommand extends CommandClass {
  constructor() {
    super({
      name: "say",
      arguments: [
        {
          name: "message",
          type: "...string",
          required: true,
        },
      ],
    });
    this.execute = (ctx) => {
      ctx.message.send({
        content: ctx.arguments.message,
        allowedMentions: { parse: [] },
      });
    };
  }
}
