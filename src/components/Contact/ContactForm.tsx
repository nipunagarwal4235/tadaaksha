import { FC, FormEvent, useState } from "react";

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
            required
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors h-40 resize-none"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-black text-white px-8 py-3 hover:bg-gray-900 transition-colors"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
