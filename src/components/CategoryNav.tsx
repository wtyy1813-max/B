import type { Lang } from '../data/menu-i18n'
import { categories, i18n } from '../data/menu-i18n'

interface CategoryNavProps {
  lang: Lang
  active: string
  onSelect: (catId: string) => void
}

export function CategoryNav({ lang, active, onSelect }: CategoryNavProps) {
  const t = i18n[lang]

  return (
    <div
      className="sticky z-[90] bg-white border-b"
      style={{ top: 52, borderColor: 'var(--blue-pale)' }}
    >
      <div className="flex overflow-x-auto scrollbar-hide gap-0 px-2 scroll-smooth">
        <button
          className={[
            'flex-shrink-0 px-3.5 py-3 border-none bg-transparent text-[12.5px] font-medium cursor-pointer whitespace-nowrap transition-all duration-200',
            active === 'all'
              ? 'text-blue-mid border-b-2 border-blue-mid'
              : 'text-text-light border-b-2 border-transparent',
          ].join(' ')}
          style={{ color: active === 'all' ? 'var(--blue-mid)' : 'var(--text-light)' }}
          onClick={() => onSelect('all')}
        >
          {t.catAll}
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={[
              'flex-shrink-0 px-3.5 py-3 border-none bg-transparent text-[12.5px] font-medium cursor-pointer whitespace-nowrap transition-all duration-200 border-b-2',
              active === cat.id
                ? 'border-blue-mid'
                : 'border-transparent',
            ].join(' ')}
            style={{ color: active === cat.id ? 'var(--blue-mid)' : 'var(--text-light)' }}
            onClick={() => onSelect(cat.id)}
          >
            {cat.names[lang]}
          </button>
        ))}
      </div>
    </div>
  )
}
