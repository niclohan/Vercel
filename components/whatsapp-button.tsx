"use client"

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      <a
        href="https://tr.ee/Jm7BLJAFJe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center rounded-full bg-gold-600 text-forest-900 px-4 shadow-lg transition-all hover:bg-gold-500 hover:scale-105"
        aria-label="Agendar Horário"
      >
        <span className="font-bold mr-2">Agendar Horário</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y1="6" />
          <line x1="8" x2="8" y1="2" y1="6" />
          <line x1="3" x2="21" y1="10" y1="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      </a>

      <a
        href="https://wa.me/5511963176982"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="currentColor" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="currentColor" />
          <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  )
}
