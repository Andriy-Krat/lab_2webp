function Header() {
  return (
    <header className="border-b border-dashed border-[#7dd3fc]/40 pb-8 mb-8">
      <h1 className="text-5xl font-bold tracking-widest mb-2">ANDRIY KRAT</h1>
      <p className="text-[#7dd3fc] text-xl font-semibold mb-4">Cybersecurity Student</p>
      <div className="text-white/80 text-sm space-y-1">
        <p>Location: Lviv, Ukraine | Phone: +380956582655</p>
        <p>Email: <a href="mailto:andrii.krat.kb.2023@lpnu.ua" className="text-[#7dd3fc] hover:text-white transition-colors duration-300">andrii.krat.kb.2023@lpnu.ua</a></p>
      </div>
    </header>
  );
}
export default Header;