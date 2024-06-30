//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxNWkxpK0hpTFk3cERXdFZqbjk2M1c1dHZ4MThQUEppN3ZGMmZkenFuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnhsaS8wOUF2Z1lrKzRXYXpsOXc2VUpqRXljQ1NRMjJQNVZMaHY3Vmlsaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR0pPKy9YWEgxS0ZUY1dFTlJrRWxuTnNXN1pDWlR1UURQSlpFNGNadlhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzeG9xVXQvbllBeDBIV3dzelBJN2czQWswVGlsWnlXZEZLR01tLzhqendzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNaS80em1DS0Q4NVNwVmhQT21NZUJMektwSDJpVTdxUXQ0enZ1SU5qbTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im56Q1lKeGp3ZHF0U1o2OEpTV2t3a1RHZ2p5R0VkM1VjNFFXeWtoOENhSDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NLVkFXLzYyMGs3YVd4UHM5d1hUbnZlUERYRDRmanJJS2p0bTVBODRVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJUQVdEbmh6QmpKNkR4RElIcE1pSFZTbFQzNXZ5REhJYWRpdGpRMHMxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktxeksweUhMdW9Id2FpKzZSalFOZDVrQklvT1NUNjU1dFBpNHNnSVdNVkE5d0RDSExnMVpQMEdqK2ZENE8xMWZGVktJQTNxemxGbnNaZzFVN0YrcUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkVtMTlnMERNbVZKcGc4UUFTeGVzSXArNWFwOG91U0tVQzhuUW10N29hOHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk5ODE2NTU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIzMDdBRkJDNDY5NTQyRkY1QzRBMzQzMTM3QkJBNTgxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3NTg2NDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5OTgxNjU1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QzFCRjE0QTY0MDcyNUZFNUNBOEIwODgyQUE1RUYxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzU4NjQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTk4MTY1NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDBDRkE5ODNBM0MxQjE4QTRDRkZEQUU3NzgwRjk5ODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTc1ODY0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk5ODE2NTU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI5NzhGQUFDMkZBNzRCRDA3MTlGRTFGNkZFNEIxRUEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk3NTg2NDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii1fSXctaFpLVDVHMExPV1p1ZlJ1ZnciLCJwaG9uZUlkIjoiYmZkZDE0YTktYzdlYy00MGYwLWIyODctODg5ZDdkOGE3NTQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImprK2pIcDY3OHpybGtxTG5yMVFacXR4S3IxTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QXV5dTNRK2FTYWlZYW5UcmN2Q0QvbWNBV3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEVRODNEVDgiLCJtZSI6eyJpZCI6IjI1NDc5OTgxNjU1NzoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV1hqYXNERUtmZWhiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhOHEyeERVWjhBY0V0WFIxbEJBWUhrSk5kajJqK2kxZ2lPa05sOXlwd3pnPSIsImFjY291bnRTaWduYXR1cmUiOiJ3MzJ0R2FoWElrYm1vVFRFUWNEL0YyVVNyQjVKK0hzZ210Y2tGNjFxRXBRMnlrUW5wMlVzaHp4dWVyLzFMaks4eFdkZ1dNZUhMT0Zkb3dmamRSNm1Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTExrRDk0ZllZK1J2NkZENG16Zng4b2FwdFcvQ3d3azZVUWxMYWVsbjFGYWdYZG04NU5Ib3ZBZVhuSlVXRTB5cUhvTE5BWjhWRmhuL25NMGdtU3BWQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTk4MTY1NTc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXdkt0c1ExR2ZBSEJMVjBkWlFRR0I1Q1RYWTlvL290WUlqcERaZmNxY000In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzU4NjQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5CayJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
