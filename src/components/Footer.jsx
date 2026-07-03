export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-sm text-emerald-100/40 border-t border-white/5">
      © {year} No Tengo Fichas
    </footer>
  )
}
