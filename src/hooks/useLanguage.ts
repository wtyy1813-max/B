import { useState } from 'react'
import type { Lang } from '../data/menu-i18n'

export function useLanguage(initial: Lang = 'zh') {
  const [lang, setLang] = useState<Lang>(initial)
  return { lang, setLang }
}
