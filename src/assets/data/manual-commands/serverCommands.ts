/* eslint-disable max-len */
import { CommandInt } from 'src/assets/interfaces/CommandInt';

export const serverCommands: CommandInt[] = [
  {
    name: 'config',
    description:
      'This command lists the current server configuration, for logging channels etc. This command is locked to moderators with the Manage Server permission. The Discord user associated with the process.env.OWNER_ID can access this command regardless of permissions, but should only do so for the sake of development purposes.',
    parameters: '[?set] [?key] [?value]',
  },
  {
    name: 'leave',
    description:
      'Pass a server ID value for server, and Becca will leave that server. This command is locked to the Discord user associated with the process.env.OWNER_ID value.',
    parameters: '[server]',
  },
  {
    name: 'leaderboard',
    description:
      'Generates an embed containing the top ten users (by points) in the server, and the level + rank of the user who called the command.',
  },
  {
    name: 'level',
    description: `This command sends an embed containing the [user]'s experience points and current level. If no parameter is passed, it will return the message author's level.`,
    parameters: '[?user]',
  },
  {
    name: 'levelscale',
    description:
      'This command returns a set of embeds containing the breakdown for the level scale.',
  },
  {
    name: 'list',
    description:
      'This command returns embed(s) containing a list of the servers Becca is in, and the owner information for each server. This command is restricted to the bot owner only.',
  },
  {
    name: 'ping',
    description:
      'This command will generate the latency for Becca. She will send a response back with the communication time in milliseconds.',
  },
  {
    name: 'resetlevel',
    description:
      'This command resets the level data for the server. The command requires the <code>MANAGE_SERVER</code> permission. Becca will clear all level data and set every user back to 0 points.',
  },
  {
    name: 'resetstar',
    description:
      'This command resets the star counts for the server. The command requires the <code>MANAGE_SERVER</code> permission. Becca will clear all of the star counts.',
  },
  {
    name: 'role',
    description:
      'This command accepts the name of a role as [role]. If that role exists and is in the server self_role list, Becca will add or remove the role from the user. If the <code>role</code> parameter is omitted, Becca will return a list of self-assignable roles.',
    parameters: '[role]',
  },
  {
    name: 'server',
    description: `This command returns a message embed containing information about the current server. The information includes the server name, creation date, the user's join date, the server owner, member information, channel information, and role information.`,
  },
  {
    name: 'suggest',
    description:
      'Sends your suggestion to the server suggestions channel. If one is not configured, rejects the command. No special formatting is required for the suggestion parameter - Becca will use all of the text following the command itself.',
    parameters: '[suggestion]',
  },
  {
    name: 'suggestion',
    description:
      'Either approves or denies the suggestion in the message ID. Updates the embed with the approval/denial, the moderator who took the action, and the reason (if provided). This command requires the Manage Server permission.',
    parameters: '[approve|deny] [message_id] [?reason]',
  },
];
