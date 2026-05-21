function Skills() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#7dd3fc] after:mt-2">SKILLS</h2>
      <ul className="list-disc list-inside text-white/85 text-sm space-y-3">
        <li><strong className="text-[#7dd3fc]">IT Audit & Security:</strong> IT Risk Assessment, Information Protection, Database Security, ISO 27001 (Familiarity), ITIL Principles.</li>
        <li><strong className="text-[#7dd3fc]">Infrastructure & Networks:</strong> Network Security, Computer Systems Architecture, Linux environments.</li>
        <li><strong className="text-[#7dd3fc]">Cybersecurity Tools:</strong> Kali Linux, Wireshark, and Cisco Packet Tracer.</li>
      </ul>
    </section>
  );
}
export default Skills;