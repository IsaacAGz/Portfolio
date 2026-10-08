"use client";

import { useChat } from "@ai-sdk/react";
import { ChatCircle, X } from "@phosphor-icons/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

const starters = [
  "What's your background?",
  "What have you shipped?",
  "What are you strongest at?",
];

const maxCharacters = 500;

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((part) => part.type === "text" && part.text)
    .map((part) => part.text)
    .join("");
}

export function ChatWidget() {
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [transport] = useState(
    () => new DefaultChatTransport({ api: "/api/chat" }),
  );
  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
  });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const items = [
        ...panel.querySelectorAll<HTMLElement>(
          'button, textarea, a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((item) => !item.hasAttribute("disabled"));

      if (items.length === 0) {
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const wide = window.matchMedia("(min-width: 768px)").matches;
    const previousOverflow = document.body.style.overflow;
    if (!wide) {
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  const ask = (text: string) => {
    const trimmed = text.trim().slice(0, maxCharacters);
    if (!trimmed || busy) {
      return;
    }
    clearError();
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] motion-safe:active:scale-[0.98] md:right-6 md:bottom-6"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <ChatCircle size={22} weight="light" aria-hidden="true" />
        <span className="sr-only">{open ? "Close chat" : "Open chat"}</span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Chat"
            className="fixed inset-0 z-30 flex flex-col bg-background md:inset-auto md:right-6 md:bottom-24 md:h-[min(36rem,calc(100dvh-8rem))] md:w-[380px] md:rounded-[2rem] md:border md:border-white/10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-sm font-medium text-foreground">Ask about the work</p>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-white/5 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                <X size={16} weight="light" aria-hidden="true" />
                <span className="sr-only">Close chat</span>
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
              {messages.length === 0 ? (
                <div className="flex flex-col items-start gap-2">
                  {starters.map((starter) => (
                    <button
                      key={starter}
                      type="button"
                      className="rounded-full border border-white/15 px-4 py-2 text-left text-sm text-foreground hover:bg-white/5"
                      onClick={() => ask(starter)}
                      disabled={busy}
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              ) : (
                messages.map((message) => (
                  <p
                    key={message.id}
                    className={
                      message.role === "user"
                        ? "ml-8 rounded-2xl bg-white/10 px-4 py-3 text-sm leading-relaxed text-foreground"
                        : "mr-8 text-sm leading-relaxed text-muted"
                    }
                  >
                    {messageText(message.parts)}
                  </p>
                ))
              )}
              {busy ? <p className="text-sm text-muted">Writing…</p> : null}
              {error ? (
                <p className="text-sm text-foreground" role="alert">
                  The chat could not answer just now.
                </p>
              ) : null}
            </div>
            <form
              className="border-t border-white/10 p-4"
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <label htmlFor="chat-message" className="sr-only">
                Message
              </label>
              <div className="flex items-end gap-2">
                <textarea
                  id="chat-message"
                  ref={inputRef}
                  value={input}
                  maxLength={maxCharacters}
                  rows={2}
                  placeholder="Ask about the work"
                  disabled={busy}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      ask(input);
                    }
                  }}
                  className="min-h-12 flex-1 resize-none rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted"
                />
                <button
                  type="submit"
                  disabled={busy || input.trim().length === 0}
                  className="inline-flex h-12 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background disabled:opacity-40"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
