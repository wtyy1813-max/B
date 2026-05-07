import { useEffect } from 'react'
import type { Lang, MenuItem } from '../data/menu-i18n'
import { i18n } from '../data/menu-i18n'
import { useScrollLock } from '../hooks/useScrollLock'

interface ItemDetailModalProps {
  item: MenuItem | null
  lang: Lang
  onClose: () => void
}

export function ItemDetailModal({ item, lang, onClose }: ItemDetailModalProps) {
  const isOpen = item !== null
  useScrollLock(isOpen)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const t = i18n[lang]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[200] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,20,40,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`fixed bottom-0 z-[201] bg-white overflow-y-auto transition-transform duration-300`}
        style={{
          left: '50%',
          transform: isOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100%)',
          width: 375,
          maxHeight: '90vh',
          borderRadius: '20px 20px 0 0',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {item && (
          <>
            {/* Image */}
            <div className="relative w-full">
              <img
                src={`images/${item.image}`}
                alt={item.names[lang]}
                className="w-full block"
                style={{ height: 'auto' }}
                loading="lazy"
              />
              <button
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border-none text-white cursor-pointer text-base"
                style={{ background: 'rgba(0,0,0,0.45)' }}
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-5 pt-4.5 pb-8">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1"
                style={{ color: 'var(--blue-light)' }}
              >
                {item.instructor}
              </div>
              <div
                className="text-[21px] font-bold leading-tight mb-3.5"
                style={{ color: 'var(--text-dark)' }}
              >
                {item.names[lang]}
              </div>

              {/* Schedule */}
              <div className="mb-4">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-1.5"
                  style={{ color: 'var(--blue-mid)' }}
                >
                  {t.modalSchedule}
                </div>
                <div className="text-xs leading-[1.75]" style={{ color: 'var(--text-mid)' }}>
                  {item.schedule[lang]}
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-1.5"
                  style={{ color: 'var(--blue-mid)' }}
                >
                  {t.modalLocation}
                </div>
                <div className="text-xs leading-[1.75]" style={{ color: 'var(--text-mid)' }}>
                  {item.location[lang]}
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div
                  className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-1.5"
                  style={{ color: 'var(--blue-mid)' }}
                >
                  {t.modalPrice}
                </div>
                <div className="flex flex-col gap-1.5">
                  {item.price.map((p, i) => {
                    const val = p.value === 'market'
                      ? (lang === 'zh' ? '時價' : lang === 'en' ? 'Market Price' : lang === 'ja' ? '時価' : '시가')
                      : `NT$${p.value}`
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center px-3 py-2.5 rounded-lg"
                        style={{ background: 'var(--blue-mist)' }}
                      >
                        <span className="text-xs" style={{ color: 'var(--text-mid)' }}>
                          {p.label[lang]}
                        </span>
                        <span className="text-base font-bold" style={{ color: 'var(--blue-deep)' }}>
                          {val}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Description */}
              {item.desc?.[lang] && (
                <div className="mb-4">
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.12em] mb-1.5"
                    style={{ color: 'var(--blue-mid)' }}
                  >
                    {t.modalDesc}
                  </div>
                  <div className="text-xs leading-[1.75]" style={{ color: 'var(--text-mid)' }}>
                    {item.desc[lang]}
                  </div>
                </div>
              )}

              {/* Note */}
              {item.note[lang] && (
                <div
                  className="mt-3.5 px-3.5 py-3 rounded-md text-xs leading-[1.7]"
                  style={{
                    background: '#fff8ee',
                    borderLeft: '3px solid #f0b429',
                    color: 'var(--text-mid)',
                  }}
                >
                  {item.note[lang]}
                </div>
              )}

              {/* LINE Button */}
              <a
                href="https://line.me/R/ti/p/@832hxihr"
                className="block mt-4.5 py-3.5 rounded-xl text-white text-sm font-bold text-center no-underline tracking-wide"
                style={{ background: '#06c755', letterSpacing: '0.05em' }}
              >
                {t.lineBtn}
              </a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
