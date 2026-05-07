import { useState, useCallback } from 'react'
import type { Lang, MenuItem } from './data/menu-i18n'
import { menuItems, categories, storeInfo, i18n } from './data/menu-i18n'
import { useLanguage } from './hooks/useLanguage'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Header } from './components/Header'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'

const fontMap: Record<Lang, string> = {
  zh: "'Noto Sans TC', 'Noto Sans', sans-serif",
  en: "'Noto Sans', sans-serif",
  ja: "'Noto Sans JP', 'Noto Sans', sans-serif",
  ko: "'Noto Sans KR', 'Noto Sans', sans-serif",
}

const catOrder = ['movement', 'ocean', 'bodywork', 'yoga', 'bmc']

export default function App() {
  const { lang, setLang } = useLanguage('zh')
  const [activeCat, setActiveCat] = useState('all')
  const [modalItem, setModalItem] = useState<MenuItem | null>(null)
  const t = i18n[lang]

  const handleCatSelect = useCallback((catId: string) => {
    setActiveCat(catId)
    if (catId !== 'all') {
      requestAnimationFrame(() => {
        const sec = document.getElementById(`section-${catId}`)
        if (sec) {
          const top = sec.getBoundingClientRect().top + window.scrollY - 104
          window.scrollTo({ top, behavior: 'smooth' })
        }
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const toRender = activeCat === 'all' ? catOrder : [activeCat]

  return (
    <div style={{ fontFamily: fontMap[lang], width: 375, margin: '0 auto' }}>
      <LanguageSwitcher lang={lang} onChange={setLang} />
      <Header lang={lang} />

      {/* About */}
      <section
        className="px-5 py-5 border-b"
        style={{ background: 'var(--blue-mist)', borderColor: 'var(--blue-pale)' }}
      >
        <div
          className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2.5"
          style={{ color: 'var(--blue-mid)' }}
        >
          {t.aboutTitle}
        </div>
        <div className="text-xs leading-[1.8]" style={{ color: 'var(--text-mid)' }}>
          {storeInfo.about[lang]}
        </div>
      </section>

      {/* Service Flow */}
      <section
        className="bg-white px-5 py-5 border-b"
        style={{ borderColor: 'var(--blue-pale)' }}
      >
        <div
          className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3.5"
          style={{ color: 'var(--blue-mid)' }}
        >
          {t.serviceTitle}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-start">
            <div
              className="w-7 h-7 min-w-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: 'var(--blue-mid)' }}
            >
              1
            </div>
            <div>
              <div className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-dark)' }}>
                {t.flow1Label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                {t.flow1Desc}
              </div>
            </div>
          </div>
          <div className="w-px h-4 ml-3.5" style={{ background: 'var(--blue-pale)' }} />
          <div className="flex gap-3 items-start">
            <div
              className="w-7 h-7 min-w-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: 'var(--blue-mid)' }}
            >
              2
            </div>
            <div>
              <div className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-dark)' }}>
                {t.flow2Label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                {t.flow2Desc}
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-3 px-3 py-2.5 rounded-lg text-xs leading-[1.7]"
          style={{ background: 'var(--blue-mist)', color: 'var(--text-mid)' }}
        >
          {t.flowNote}
        </div>
      </section>

      {/* Schedule 2026 */}
      <section
        className="bg-white px-5 pt-5 pb-6 border-b"
        style={{ borderColor: 'var(--blue-pale)' }}
      >
        <div
          className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3.5"
          style={{ color: 'var(--blue-mid)' }}
        >
          {t.scheduleTitle}
        </div>

        <div className="rounded-xl overflow-hidden mb-4">
          <img src="images/schedule-2026.png" alt="2026 Schedule" className="w-full block" loading="eager" />
        </div>

        <div className="flex flex-col gap-2">
          <ScheduleRow
            dayLabel={t.dayMon} dayEn="MON" color="teal"
            slots={[
              { time: '14:00–15:30', name: t.slotMon1, instructor: 'Candy', color: 'teal' },
              { time: `⭐ ${t.slotPrivate}`, name: t.slotPrivateInstructors, color: 'default' },
            ]}
          />
          <ScheduleRow
            dayLabel={t.dayTue} dayEn="TUE" color="default"
            slots={[
              { time: '10:00–11:00', name: t.slotTue1, instructor: 'Candy', color: 'default' },
              { time: '19:45–21:15', name: t.slotTue2, instructor: 'Monkey', color: 'teal' },
            ]}
          />
          <ScheduleRow
            dayLabel={t.dayWed} dayEn="WED" color="default"
            slots={[
              { time: '10:00–11:30', name: t.slotWed1, instructor: 'Candy', color: 'default' },
              { time: '18:00–19:30', name: t.slotWed2, instructor: 'Joanna', color: 'brown' },
            ]}
          />
          <ScheduleRow
            dayLabel={t.dayThuSat} dayEn="THU–SAT" color="pink"
            slots={[
              { time: '09:00–20:00', name: t.slotThuFriSat, instructor: '董書良', color: 'pink' },
            ]}
          />
        </div>
      </section>

      <CategoryNav lang={lang} active={activeCat} onSelect={handleCatSelect} />

      <div className="px-4 py-4 flex flex-col gap-3.5">
        {toRender.map(catId => {
          const items = menuItems.filter(it => it.category === catId)
          if (!items.length) return null
          const cat = categories.find(c => c.id === catId)!
          return (
            <MenuSection
              key={catId}
              catId={catId}
              catName={cat.names[lang]}
              items={items}
              lang={lang}
              onCardClick={setModalItem}
            />
          )
        })}
      </div>

      {/* Price Note */}
      <div
        className="mx-4 mb-6 mt-1 px-4 py-3.5 rounded-[14px] border"
        style={{ background: 'var(--blue-mist)', borderColor: 'var(--blue-pale)' }}
      >
        <div
          className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1.5"
          style={{ color: 'var(--blue-mid)' }}
        >
          {t.priceNoteTitle}
        </div>
        <div className="text-xs leading-[1.8]" style={{ color: 'var(--text-mid)' }}>
          {storeInfo.priceNote[lang]}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="px-5 pt-7 pb-9 text-center"
        style={{ background: 'var(--blue-deep)', color: 'rgba(255,255,255,0.7)' }}
      >
        <div
          className="text-base font-bold text-white mb-3"
          style={{ letterSpacing: '0.08em' }}
        >
          {storeInfo.name[lang]}
        </div>
        <div className="text-xs mb-1.5 leading-relaxed">{storeInfo.address[lang]}</div>
        <div className="text-xs mb-1.5">
          <a href="tel:0920373643" style={{ color: 'var(--blue-light)' }}>0920-373-643</a>
        </div>
        <a
          href="https://line.me/R/ti/p/@832hxihr"
          className="inline-block mt-3.5 px-7 py-2.5 rounded-3xl text-white text-sm font-bold no-underline"
          style={{ background: '#06c755', letterSpacing: '0.05em' }}
        >
          {t.lineBtn}
        </a>
      </footer>

      <ItemDetailModal item={modalItem} lang={lang} onClose={() => setModalItem(null)} />
    </div>
  )
}

type SlotColor = 'teal' | 'pink' | 'brown' | 'default'

interface SlotData {
  time: string
  name: string
  instructor?: string
  color: SlotColor
}

interface ScheduleRowProps {
  dayLabel: string
  dayEn: string
  color: SlotColor
  slots: SlotData[]
}

const dayBgMap: Record<SlotColor, string> = {
  teal:    'var(--teal)',
  pink:    '#d45d8a',
  brown:   '#8B6C4E',
  default: 'var(--blue-deep)',
}

const slotBgMap: Record<SlotColor, string> = {
  teal:    '#e8f7f6',
  pink:    '#fce8f1',
  brown:   '#f5ede4',
  default: 'var(--blue-mist)',
}

const timeColorMap: Record<SlotColor, string> = {
  teal:    'var(--teal)',
  pink:    '#d45d8a',
  brown:   '#8B6C4E',
  default: 'var(--blue-mid)',
}

function ScheduleRow({ dayLabel, dayEn, color, slots }: ScheduleRowProps) {
  return (
    <div className="flex items-stretch gap-2" style={{ minHeight: 52 }}>
      <div
        className="flex flex-col items-center justify-center rounded-[10px] flex-shrink-0 text-white font-bold"
        style={{
          minWidth: 52, width: 52,
          background: dayBgMap[color],
          fontSize: 10,
          letterSpacing: '0.06em',
          lineHeight: 1.3,
          padding: '6px 4px',
        }}
      >
        <span>{dayLabel}</span>
        <span style={{ fontSize: 8, opacity: 0.75, fontWeight: 400, marginTop: 2 }}>{dayEn}</span>
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        {slots.map((slot, i) => (
          <div
            key={i}
            className="rounded-lg px-2.5 py-1.5 flex flex-col gap-0.5"
            style={{ background: slotBgMap[slot.color] }}
          >
            <span
              className="text-[11px] font-semibold"
              style={{ color: timeColorMap[slot.color] }}
            >
              {slot.time}
            </span>
            <span className="text-[13px] font-bold" style={{ color: 'var(--text-dark)' }}>
              {slot.name}
            </span>
            {slot.instructor && (
              <span className="text-[11px]" style={{ color: 'var(--text-light)' }}>
                {slot.instructor}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
