import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number
  const whatsappNumber = '+92xxxxxxxxxx'
  const message = 'Hello! I have a query about GGC Muridke.'

  const whatsappUrl = `https://wa.me/${whatsappNumber} ?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-fade-in"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />

      {/* Tooltip */}
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </a>
  )
}

export default WhatsAppButton
