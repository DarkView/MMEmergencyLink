## A plugin for [Dragory's ModMail](https://github.com/dragory/modmailbot) that allows users to get DM message ID's 
**Currently on Version 1.0**  
Plugin written and maintained by [DarkView](https://github.com/DarkView) (Dark#1010 on Discord)  
    
## Setup
Make sure you are running at least v3.3.0 of Modmail.
in your config.ini file, create a new line and add  
```
plugins[] = npm:DarkView/MMEmergencyLink
extraIntents[] = guildMessageReactions
```
You need to restart the bot in order for the plugin to be loaded!

## Usage
### General
This plugin mainly has one use, that being reporting messages that threaten self-harm or suicide to Discord's Trust and Safety team.  
To create a ticket for this purpose visit [this page](https://dis.gd/request), select "Report other issue" and then "Self-harm or suicide concern".  
This is the moment you need the message ID for Discord to take immediate action.
### Restrictions
The commands [below](#commands) will only work in thread channels and only on messages that are actually in the DM channel with the user.
### Bugs
There are currently no known bugs.  
If you have found a bug, please report it at the [issues page for the plugin](https://github.com/DarkView/MMEmergencyLink/issues)!  
You can also find the plugin author (Dark#1010) on the [official support discord](https://discord.gg/vRuhG9R) in case you have any specific questions.
### Feature Requests
If you want to request or suggest a feature, open an issue on the [plugins issue page](https://github.com/DarkView/MMEmergencyLink/issues)!
In case the feature you want to request is outside of the scope of this plugin (anything not to do with reactions creating threads) please use the `#plugin-requests` channel on the [official support discord](https://discord.gg/vRuhG9R).
## Commands

Parameters in <> are required, parameters in [] are optional.  
These commands only work on the inbox server, just like regular ModMail commands.    
### Retrieving DM link
Signature: `!messagelink <messageId>`  
This will return the message link of the given message in the DM channel.   
Alternatively, this command will also run if you react with 🔗 to any valid message.
