import type { Lang, MenuItem } from '../data/menu-i18n'
import { i18n } from '../data/menu-i18n'

interface MenuCardProps {
  item: MenuItem
  lang: Lang
  onClick: () => void
}

export function MenuCard({ item, lang, onClick }: MenuCardProps) {
  const t = i18n[lang]

  return (
    <div
      className="bg-white rounded-[14px] overflow-hidden cursor-pointer transition-transform duration-150 active:scale-[0.985]"
      style={{ boxShadow: '0 2px 16px rgba(27,79,114,0.10)' }}
      onClick={onClick}
    >
      <img
        className="w-full object-cover block"
        style={{ height: 160, objectPosition: 'center 25%' }}
        src={`images/${item.image}`}
        alt={item.names[lang]}
        loading="lazy"
      />
      <div className="px-4 pb-4 pt-3.5">
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-1"
          style={{ color: 'var(--blue-light)' }}
        >
          {item.instructor}
        </div>
        <div
          className="text-[17px] font-bold leading-tight mb-2"
          style={{ color: 'var(--text-dark)' }}
        >
          {item.names[lang]}
        </div>
        <div className="flex flex-col gap-1 mb-2.5">
          <div className="flex items-start gap-1.5 text-xs" style={{ color: 'var(--text-mid)' }}>
            <span className="min-w-3.5 text-xs mt-0.5" style={{ color: 'var(--blue-light)' }}>🕐</span>
            <span>{item.schedule[lang]}</span>
          </div>
          <div className="flex items-start gap-1.5 text-xs" style={{ color: 'var(--text-mid)' }}>
            <span className="min-w-3.5 text-xs mt-0.5" style={{ color: 'var(--blue-light)' }}>📍</span>
            <span>{item.location[lang]}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {item.price.map((p, i) => {
            const val = p.value === 'market'
              ? t.marketPrice
              : `NT$${p.value}`
            return (
              <div
                key={i}
                className="border rounded-md px-2 py-1 text-[11.5px] font-medium"
                style={{
                  background: 'var(--blue-mist)',
                  borderColor: 'var(--blue-pale)',
                  color: 'var(--blue-deep)',
                }}
              >
                <span className="mr-0.5" style={{ color: 'var(--text-light)' }}>
                  {p.label[lang]}
                </span>
                {val}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
