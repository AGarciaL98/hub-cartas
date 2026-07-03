export default function AppCard({ app }) {
  const { nombre, descripcion, url, icono, color, estado } = app
  const proximamente = estado === 'proximamente'

  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
    >
      {proximamente && (
        <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full px-3 py-1">
          Próximamente
        </span>
      )}

      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
        style={{ backgroundColor: `${color}1a`, color }}
      >
        {icono}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white">{nombre}</h2>
        <p className="mt-1 text-sm text-emerald-100/60">{descripcion}</p>
      </div>

      {proximamente ? (
        <span
          aria-disabled="true"
          className="mt-auto inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/40 cursor-not-allowed select-none"
        >
          No disponible aún
        </span>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition-colors hover:bg-amber-300"
        >
          Abrir app
        </a>
      )}
    </div>
  )
}
