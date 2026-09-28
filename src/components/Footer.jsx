export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2A3454] mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[#94A3B8] flex flex-wrap justify-between gap-4">
        <span>© {new Date().getFullYear()} mililil-ka</span>
        <div className="flex gap-4">
          <a href="https://t.me/bug_bug97" className="hover:text-[#06B6D4]">Telegram</a>
          <a href="mailto:irinaka307@gmail.com" className="hover:text-[#06B6D4]">Email</a>
          <a href="https://github.com/Mililil-Ka" className="hover:text-[#06B6D4]">GitHub</a>
        </div>
      </div>
    </footer>
  )
}