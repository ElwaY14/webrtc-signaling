# WebRTC Signaling Server

This is the signaling server for the birthday website. The actual camera/video connection uses WebRTC; this server only helps the two browsers find each other.

## Deploy on Render
1. Create a new **Web Service** and upload this `server` folder (or connect the repository containing it).
2. Build command: `npm install`
3. Start command: `npm start`
4. Use the HTTPS URL Render gives you, for example `https://ultah-signaling.onrender.com`.
5. In `index.html`, change `SIGNALING_SERVER` to that URL.
6. Re-upload the website folder/ZIP to Netlify.

Both phones must open the Netlify site over HTTPS. Each phone must allow camera/microphone access.

## Important
Do not put passwords, payment information, or private data in room codes. The room code is only a temporary identifier.
