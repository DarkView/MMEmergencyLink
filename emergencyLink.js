module.exports = function ({ config, bot, commands, knex, threads }) {
  async function messageIdToUsersideMessage(msgId) {
    matchingMessage = await knex.from("thread_messages").where("inbox_message_id", msgId).first();

    if (!matchingMessage) return null;
    if (
      matchingMessage.message_type === 3 ||
      matchingMessage.message_type === 4 ||
      matchingMessage.message_type === 7
    ) {
      const realMsg = await bot.getMessage(matchingMessage.dm_channel_id, matchingMessage.dm_message_id);
      if (!realMsg) return null;
      return realMsg;
    }

    return null;
  }

  const findMessageLinkCmd = async (message, args, thread) => {
    const msg = await messageIdToUsersideMessage(args.messageId);
    if (!msg) return;

    thread.postSystemMessage(
      `**DM Link** for Message ID \`${args.messageId}\`:\nhttps://discord.com/channels/@me/${msg.channel.id}/${msg.id}`,
    );
  };

  const onReactionAdd = async (message, emoji, reactor) => {
    if (message.channel.type === 1) return;
    if (message.guild_id === config.inboxServerId) return;
    if (emoji.name !== "🔗") return;
    const thread = await threads.findByChannelId(message.channel.id);
    if (!thread) return;

    await findMessageLinkCmd(message, { messageId: message.id }, thread);
  };

  //#region registering
  // Register all commands and listeners
  commands.addInboxThreadCommand(
    "messageLink",
    [{ name: "messageId", type: "string", required: true }],
    findMessageLinkCmd,
  );

  bot.on("messageReactionAdd", onReactionAdd);
  //#endregion
};
