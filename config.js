require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || "🙂", // Command prefix

    ownerName: process.env.OWNER_NAME || "Dark_chris", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "50949098381", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUIvWVFKeHZDQnUzaTArTkRsemN6bmpzOFplMDNQejlwM3hWSGYrd0dtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVhNZWFDS2tFcGhVT3NxT1lMeVIzQ0tpTnpTS2hseDdOYzFOUWpEMkhrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTG5tRWE4dWJzRzlLTk13Nk4yZjJzWkFZR1YwaU1CZ09mWkVPYmFPeGtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Tk1oOUN2WnJZQ1liU3FyejQ1OEd0UjBxMjUvMTQ4clJEeWg2bU0wZ1VRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QcGdaWEJjYTA0ZUJzUEF3Vm9HTTRpL0pIelJwc2NadXhZbC9oVHpDWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVkRllmVFRTek1oeStCb20rV0NDRHlIbjVxT1lyUmdtM25UV0JKUXVlMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZ6UGI3MWNhTk9Da2pEVW8xOXNhd2R5YUFPU1ErMlRLOXVYcGxjLy8wQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHh6ckwxNmpTVk5GU1htY0VFMmZEQXpBY3ZtUkJqTUpmTCtLQ3Q1bGt4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJRNTVmYVdjN1ZGTVZRSUhYeTNGMUZGYWVoWTQzSGE5Rzgwd2pvOEVwV2hXZkFrWktzNURlK1d5WWJwVXRqN1Y1bHNzZU9PSlhlZzliSXZXb09leWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJaR0NvR08rc1Nsa01yeXFlWkY2cmpTSDgvcFE4akVRTkNPQllZM0o4V2ZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLMlRRRkQyWSIsIm1lIjp7ImlkIjoiNTA5NDkwOTgzODE6MTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTk0MDI5MzMyMTEyNjM6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYnB0cU1FRUpYcHBMd0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMaGZReUw0clBVTkV3T1BONEQvZ3M2MEZ5VDdsTmxUeEF4V1VSRDVOSG1FPSIsImFjY291bnRTaWduYXR1cmUiOiJ6NHVFT25OZFlGOC9iYUFwNEc2MG9XZFc0K1ZhZHRxV1NnbWdrbTJxTjFadVNMeWZET0Q2cU1nZGNMejRwdHZXQXUxNGRRUVhOWkpBamxMaFFhNytEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWjFWWURmcVE5VmZOV0YxTkpXdEw0elN2UnI4c0JiektDT09IOWEzZUZ6T0hPekYybWN1RlVyVHBKZXVvcXU3bU5xRVZ6OGRlZHYrdDAwdEFSQUpUaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0OTA5ODM4MToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTNFgwTWkrS3oxRFJNRGp6ZUEvNExPdEJjays1VFpVOFFNVmxFUStUUjVoIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzcwNDUxNTUsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREpxIn0=", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
