import type { Lang } from '../data/menu-i18n'

interface LanguageSwitcherProps {
  lang: Lang
  onChange: (lang: Lang) => void
}

const langs: { code: Lang; label: string }[] = [
  { code: 'zh', label: '繁中' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export function LanguageSwitcher({ lang, onChange }: LanguageSwitcherProps) {
  return (
    <div
      id="lang-bar"
      className="sticky top-0 z-[100] bg-white border-b flex justify-center gap-1 px-4 py-2"
      style={{ borderColor: 'rgba(27,79,114,0.10)', boxShadow: '0 2px 8px rgba(27,79,114,0.08)' }}
    >
      {langs.map(l => (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          className={[
            'flex-1 py-1.5 border-[1.5px] rounded-full text-xs font-medium cursor-pointer transition-all duration-200 tracking-wide',
            lang === l.code
              ? 'bg-blue-mid border-blue-mid text-white'
              : 'border-blue-pale bg-transparent text-text-mid',
          ].join(' ')}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
