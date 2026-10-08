import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChatCircle } from "@phosphor-icons/react/ssr";
import { Suspense } from "react";
import { ChatWidget } from "@/components/chat-widget";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.pitch,
};

function ChatLauncherFallback() {
  return (
    <button
      type="button"
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] md:right-6 md:bottom-6"
      aria-label="Open chat"
    >
      <ChatCircle size={22} weight="light" aria-hidden="true" />
    </button>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div aria-hidden="true" className="site-grid pointer-events-none fixed inset-0 -z-10" />
        <MotionProvider>
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
          <Suspense fallback={<ChatLauncherFallback />}>
            <ChatWidget />
          </Suspense>
        </MotionProvider>
      </body>
    </html>
  );
}
