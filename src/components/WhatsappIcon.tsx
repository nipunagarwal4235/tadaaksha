import { PhoneIcon as WhatsappIcon } from "lucide-react";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/your_whatsapp_number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon size={24} />
    </a>
  );
};

export default WhatsAppIcon;
