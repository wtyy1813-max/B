import type { Lang, MenuItem } from '../data/menu-i18n'
import { MenuCard } from './MenuCard'

interface MenuSectionProps {
  catId: string
  catName: string
  items: MenuItem[]
  lang: Lang
  onCardClick: (item: MenuItem) => void
}

export function MenuSection({ catId, catName, items, lang, onCardClick }: MenuSectionProps) {
  return (
    <div id={`section-${catId}`}>
      <div
        className="text-[11px] font-bold uppercase tracking-[0.12em] px-1 pt-2 pb-2.5"
        style={{ color: 'var(--blue-mid)' }}
      >
        {catName}
      </div>
      <div className="flex flex-col gap-3">
        {items.map(item => (
          <MenuCard
            key={item.id}
            item={item}
            lang={lang}
            onClick={() => onCardClick(item)}
          />
        ))}
      </div>
    </div>
  )
}
