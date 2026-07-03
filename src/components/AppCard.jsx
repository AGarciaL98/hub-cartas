export default function AppCard({ app }) {
  const { nombre, descripcion, url, icono, estado } = app
  const proximamente = estado === 'proximamente'

  return (
    <div className="group relative rounded-2xl border border-[rgba(212,175,55,0.25)] bg-[#153a2d] p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-[rgba(212,175,55,0.5)]">
      {proximamente && (
        <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide bg-[#d4af37]/10 text-[#d4af37] border border-[rgba(212,175,55,0.3)] rounded-full px-3 py-1">
          Próximamente
        </span>
      )}

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/15 text-3xl text-[#d4af37]">
        {icono}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">{nombre}</h2>
        <p className="mt-1 text-sm text-white/60">{descripcion}</p>
      </div>

      {proximamente ? (
        <span
          aria-disabled="true"
          className="mt-auto text-sm font-medium text-white/30 cursor-not-allowed select-none"
        >
          No disponible aún
        </span>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:text-[#e8c765] transition-colors"
        >
          Entrar →
        </a>
      )}
    </div>
  )
}
