import type { UIMessage } from "ai";

const maxMessages = 8;
const maxCharacters = 500;

function textOf(message: UIMessage) {
  if (!Array.isArray(message.parts)) {
    return "";
  }

  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ")
    .trim();
}

export function prepareChatMessages(
  input: unknown,
): { messages: UIMessage[] } | { error: string } {
  if (!Array.isArray(input) || input.length === 0) {
    return { error: "Send a message." };
  }

  const messages: UIMessage[] = [];

  for (const item of input.slice(-maxMessages)) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const message = item as UIMessage;
    if (message.role !== "user" && message.role !== "assistant") {
      continue;
    }

    const text = textOf(message).slice(0, maxCharacters);
    if (!text) {
      continue;
    }

    messages.push({
      id: typeof message.id === "string" ? message.id : crypto.randomUUID(),
      role: message.role,
      parts: [{ type: "text", text }],
    });
  }

  const latest = messages.at(-1);
  if (!latest || latest.role !== "user") {
    return { error: "Send a message." };
  }

  return { messages };
}
