# Eternal Crimson AI v6

A normal conversational AI website powered by Cloudflare Workers AI.

Features:
- More natural personality
- Conversation-aware replies
- Markdown/code rendering
- Local chat history
- Multiple conversations
- New Chat button
- Dark responsive UI
- Streaming replies
- Honest uncertainty / better unknown-question handling

## Deploy

```bash
npm install
npx wrangler login
npx wrangler deploy
```

Then put your Worker URL in `frontend/app.js`:

```js
const API = "https://YOUR-WORKER.workers.dev";
```

## Important

Chat history is stored in the browser's localStorage. It is not sent to Cloudflare except for the current conversation messages needed to generate a reply.

Streaming uses Cloudflare Workers AI Server-Sent Events (SSE). Workers AI usage can incur Cloudflare usage charges. Check your Cloudflare plan and current Workers AI pricing before heavy use.
