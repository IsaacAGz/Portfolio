import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
} from "ai";
import { buildChatInstructions } from "@/lib/chat-prompt";
import { prepareChatMessages } from "@/lib/chat-request";

export const maxDuration = 30;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Send a message." }, { status: 400 });
  }

  const prepared = prepareChatMessages(
    body && typeof body === "object" && "messages" in body
      ? body.messages
      : undefined,
  );

  if ("error" in prepared) {
    return Response.json({ error: prepared.error }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json({ error: "Chat is not configured." }, { status: 503 });
  }

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    instructions: buildChatInstructions(),
    messages: await convertToModelMessages(prepared.messages),
    maxOutputTokens: 250,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
