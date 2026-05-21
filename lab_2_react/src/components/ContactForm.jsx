import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
      <div className="bg-[#125488] p-8 rounded-xl max-w-md w-full shadow-2xl border border-[#7dd3fc]/40 relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-red-400 font-bold"
        >
          ✕ Закрити
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Зворотний зв'язок</h2>
        <form action="https://formspree.io/f/mbdbgkve" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm text-white/80 mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full p-2 rounded bg-white/10 text-white border border-white/20 focus:border-[#7dd3fc] outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 rounded bg-white/10 text-white border border-white/20 focus:border-[#7dd3fc] outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Номер телефону</label>
            <input type="tel" name="phone" required className="w-full p-2 rounded bg-white/10 text-white border border-white/20 focus:border-[#7dd3fc] outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Повідомлення</label>
            <textarea name="message" required rows="3" className="w-full p-2 rounded bg-white/10 text-white border border-white/20 focus:border-[#7dd3fc] outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#7dd3fc] text-[#0b3b60] font-bold py-2 px-4 rounded hover:bg-white transition-colors">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;