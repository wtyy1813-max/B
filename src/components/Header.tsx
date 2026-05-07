import type { Lang } from '../data/menu-i18n'
import { storeInfo } from '../data/menu-i18n'

interface HeaderProps {
  lang: Lang
}

export function Header({ lang }: HeaderProps) {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ height: 260 }}
      >
        <img
          src="images/hero.jpg"
          alt={storeInfo.name[lang]}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,20,40,0.15) 0%, rgba(0,20,40,0.65) 100%)' }}
        />
        <div className="absolute bottom-6 left-5 right-5">
          <div
            className="text-white font-bold tracking-wide leading-tight"
            style={{ fontSize: 28, textShadow: '0 2px 8px rgba(0,0,0,0.4)', letterSpacing: '0.05em' }}
          >
            {storeInfo.name[lang]}
          </div>
          <div
            className="text-white/90 font-light mt-1"
            style={{ fontSize: 13, letterSpacing: '0.04em' }}
          >
            {storeInfo.tagline[lang]}
          </div>
        </div>
      </section>

      {/* STORE INFO */}
      <section
        className="bg-white px-5 py-4 border-b"
        style={{ borderColor: 'var(--blue-pale)' }}
      >
        <div className="flex items-start gap-2.5 py-1">
          <span className="w-4.5 min-w-4.5 text-sm mt-0.5" style={{ color: 'var(--blue-mid)' }}>📍</span>
          <span className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            {storeInfo.address[lang]}
          </span>
        </div>
        <div className="flex items-start gap-2.5 py-1">
          <span className="w-4.5 min-w-4.5 text-sm mt-0.5" style={{ color: 'var(--blue-mid)' }}>📞</span>
          <span className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            <a href="tel:0920373643" style={{ color: 'var(--blue-mid)' }}>0920-373-643</a>
          </span>
        </div>
        <div className="flex items-start gap-2.5 py-1">
          <span className="w-4.5 min-w-4.5 text-sm mt-0.5" style={{ color: 'var(--blue-mid)' }}>💬</span>
          <span className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
            LINE:{' '}
            <a href="https://line.me/R/ti/p/@832hxihr" style={{ color: 'var(--blue-mid)' }}>@832hxihr</a>
          </span>
        </div>
      </section>
    </>
  )
}
