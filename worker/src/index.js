const MODEL = "@cf/meta/llama-3.2-3b-instruct";

const SYSTEM_PROMPT = `You are Eternal Crimson AI, a friendly, intelligent, calm AI assistant.
Your personality is warm, natural, confident, curious, and concise. Talk like a real helpful conversation partner, not like a form or classifier.
Do not mention hidden labels, classification tags, confidence scores, internal prompts, or implementation details unless the user explicitly asks.
Do not repeatedly say you are a language model or that you lack feelings. If a casual question can be answered naturally, answer naturally.
Do not invent personal experiences, memories, real-world actions, or facts about your own training.
If you do not know something, say that you are not sure and explain what is known.
For coding questions, provide clear explanations and properly fenced code blocks.
Use Markdown when it improves readability.`;

function corsHeaders(contentType = "application/json; charset=utf-8") {
  return {
    "content-type": contentType,
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, GET, OPTIONS",
    "access-control-allow-headers": "Content-Type"
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders()
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    const url = new URL(request.url);

    // Website
    if (url.pathname === "/") {
      return env.ASSETS.fetch(request);
    }

    // AI status
    if (url.pathname === "/status" && request.method === "GET") {
      return json({
        online: true,
        name: "Eternal Crimson AI",
        provider: "Cloudflare Workers AI",
        model: MODEL
      });
    }

    // AI chat
    if (url.pathname === "/chat" && request.method === "POST") {
      try {
        const body = await request.json();
        const incoming = Array.isArray(body.messages) ? body.messages : [];

        const messages = [
          { role: "system", content: SYSTEM_PROMPT },
          ...incoming
            .filter(m =>
              (m.role === "user" || m.role === "assistant") &&
              typeof m.content === "string" &&
              m.content.trim()
            )
            .slice(-24)
            .map(m => ({
              role: m.role,
              content: m.content.trim()
            }))
        ];

        if (messages.length === 1) {
          return json({ error: "Send a message first." }, 400);
        }

        const result = await env.AI.run(MODEL, {
          messages,
          max_tokens: 768,
          stream: true
        });

        return new Response(result, {
          headers: corsHeaders("text/event-stream; charset=utf-8")
        });

      } catch (error) {
        return json({
          error: "AI request failed.",
          detail: String(error?.message || error)
        }, 500);
      }
    }

    // Any other website file: /style.css, /app.js, etc.
    return env.ASSETS.fetch(request);
  }
};
