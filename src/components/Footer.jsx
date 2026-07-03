export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-sm text-white/40 border-t border-[rgba(212,175,55,0.15)]">
      © {year} No Tengo Fichas
    </footer>
  )
}
