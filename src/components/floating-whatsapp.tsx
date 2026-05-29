import { MessageCircle } from "lucide-react";
import { business } from "@/data/site";

export function FloatingWhatsApp() {
  const href = `https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(
    "Hi ShaktiFit Arena! I'd like to know more about your memberships.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elegant transition-transform hover:scale-105"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
