export type Lang = 'zh' | 'en' | 'ja' | 'ko'

export interface I18nText {
  zh: string
  en: string
  ja: string
  ko: string
}

export interface PriceOption {
  label: I18nText
  value: number | 'market'
}

export interface MenuItem {
  id: string
  category: string
  names: I18nText
  instructor: string
  price: PriceOption[]
  schedule: I18nText
  location: I18nText
  image: string
  emoji: string
  desc?: I18nText
  note: I18nText
}

export interface Category {
  id: string
  names: I18nText
}

export interface StoreInfo {
  name: I18nText
  address: I18nText
  phone: string
  line: string
  tagline: I18nText
  about: I18nText
  priceNote: I18nText
}

export const menuItems: MenuItem[] = [
  {
    id: 'movement-001',
    category: 'movement',
    names: {
      zh: '身體流動伸展',
      en: 'Body Flow & Stretch',
      ja: 'ボディフロー＆ストレッチ',
      ko: '바디 플로우 & 스트레칭',
    },
    instructor: 'Candy',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週二 10:00–11:00',
      en: 'Every Tuesday 10:00–11:00',
      ja: '毎週火曜日 10:00–11:00',
      ko: '매주 화요일 10:00–11:00',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-movement.png',
    emoji: '🌊',
    desc: {
      zh: '讓身體內在的能量、體液和情緒流動起來，維持良好的全人健康狀態。課程中啟動三種流動的探索方法，以尋找空間、連結、愛和快樂為方向，同時能達到身體適能的要求。',
      en: 'Activate the flow of inner energy, fluids and emotions in your body, maintaining overall wellness. This class explores three methods of movement to find space, connection, love and joy, while meeting physical fitness needs.',
      ja: '体内のエネルギー・体液・感情を流動させ、全人的な健康を保ちます。3つの流動探索を通じて、スペース・つながり・愛・喜びを見つけ、フィジカルフィットネスも達成します。',
      ko: '몸 내부의 에너지, 체액, 감정을 흐르게 하여 전체적인 건강 상태를 유지합니다. 세 가지 흐름 탐색을 통해 공간, 연결, 사랑, 기쁨을 찾고 체력 향상도 이룹니다.',
    },
    note: {
      zh: '課程期限3個月。報名10堂以上期課學員，可參與新浪島嶼所有課程，需提前預約。',
      en: 'Course valid for 3 months. Students enrolled in 10+ classes may attend all New Wave Island courses with advance booking.',
      ja: 'コース有効期限3ヶ月。10回以上受講の方は全コース参加可（要事前予約）。',
      ko: '수업 유효기간 3개월. 10회 이상 등록 시 모든 수업 참여 가능 (사전 예약 필요).',
    },
  },
  {
    id: 'movement-002',
    category: 'movement',
    names: {
      zh: '身心優雅游泳課',
      en: 'Graceful Swimming',
      ja: '身心優雅スイミング',
      ko: '우아한 수영 레슨',
    },
    instructor: 'Candy',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週一 14:00–15:30',
      en: 'Every Monday 14:00–15:30',
      ja: '毎週月曜日 14:00–15:30',
      ko: '매주 월요일 14:00–15:30',
    },
    location: {
      zh: '台東知本溫泉區',
      en: 'Zhiben Hot Spring Area, Taitung',
      ja: '台東知本温泉エリア',
      ko: '타이퉁 즈번 온천 지역',
    },
    image: 'course-swimming.png',
    emoji: '🏊',
    desc: {
      zh: '冬季溫泉療癒游泳課。一定要先像魚一樣優雅，才能把游泳學好。在這堂課程中，你會有更多在水中如何游動的技巧練習，當你能用各種優雅的身體動態在水中游動，你就離「學會游泳、換氣」不遠了。',
      en: 'Winter hot spring healing swimming class. Learn to move gracefully like a fish — once you can glide through the water with elegant body movements, mastering swimming and breathing will follow naturally.',
      ja: '冬の温泉ヒーリングスイミング。魚のように優雅に動くことが上達の近道。水中での優雅な身体動作を練習し、泳ぎと呼吸の習得を目指します。',
      ko: '겨울 온천 힐링 수영 수업. 물고기처럼 우아하게 움직이는 것이 수영 실력 향상의 비결.',
    },
    note: {
      zh: '冬季溫泉游泳課程。課程期限3個月。',
      en: 'Winter hot spring swimming course. Valid for 3 months.',
      ja: '冬季温泉スイミングコース。有効期限3ヶ月。',
      ko: '겨울 온천 수영 수업. 유효기간 3개월.',
    },
  },
  {
    id: 'ocean-001',
    category: 'ocean',
    names: {
      zh: '海洋療癒（台東）',
      en: 'Ocean Healing (Taitung)',
      ja: '海洋ヒーリング（台東）',
      ko: '오션 힐링 (타이퉁)',
    },
    instructor: 'Candy',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週三 AM10:00–11:30',
      en: 'Every Wednesday AM10:00–11:30',
      ja: '毎週水曜日 AM10:00–11:30',
      ko: '매주 수요일 AM10:00–11:30',
    },
    location: {
      zh: '杉原灣・加母子灣・活水湖等',
      en: 'Shangyuan Bay, Jiamuzai Bay, Living Water Lake, etc.',
      ja: '杉原湾・加母子湾・活水湖など',
      ko: '산위안만・지아무자이만・활수호 등',
    },
    image: 'course-ocean-2026.png',
    emoji: '🏊',
    desc: {
      zh: '一堂為成人量身設計的水療課，找回與水共處的自在。讓身心沉浸在藍色的療癒力，在自然水域中感受漂浮、浮游、下潛與自然呼吸的節奏，釋放壓力、放鬆身心。',
      en: 'A water therapy class designed for adults. Rediscover ease in water. Immerse your mind and body in the healing power of blue water, experiencing floating, swimming, diving and natural breathing rhythms to release stress and relax.',
      ja: '大人向けウォーターセラピー。水との共存を取り戻す。自然の水域で浮く・泳ぐ・潜る・自然な呼吸リズムを体験し、ストレス解放・心身のリラックスを目指します。',
      ko: '성인을 위한 수치료 수업. 물과 함께하는 편안함을 되찾으세요. 자연 수역에서 떠다니기, 수영, 잠수를 경험하며 스트레스를 해소합니다.',
    },
    note: {
      zh: '費用不含水域保險費及場地門票費用。課程期限3個月。',
      en: 'Fee excludes water activity insurance and venue admission fees. Course valid for 3 months.',
      ja: '料金には水域保険・施設入場料は含まれません。有効期限3ヶ月。',
      ko: '요금에 수역 보험 및 입장료는 포함되지 않습니다. 유효기간 3개월.',
    },
  },
  {
    id: 'ocean-002',
    category: 'ocean',
    names: {
      zh: '海洋療癒（花蓮）',
      en: 'Ocean Healing (Hualien)',
      ja: '海洋ヒーリング（花蓮）',
      ko: '오션 힐링 (화롄)',
    },
    instructor: 'Candy',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週五、六 AM10:00–11:30',
      en: 'Every Fri & Sat AM10:00–11:30',
      ja: '毎週金・土曜日 AM10:00–11:30',
      ko: '매주 금·토요일 AM10:00–11:30',
    },
    location: {
      zh: '石梯坪海域',
      en: 'Shitipinghai Sea Area, Hualien',
      ja: '石梯坪海域（花蓮）',
      ko: '스티핑 해역 (화롄)',
    },
    image: 'course-ocean-2026.png',
    emoji: '🌊',
    desc: {
      zh: '一堂為成人量身設計的水療課，找回與水共處的自在。讓身心沉浸在藍色的療癒力，在花蓮自然海域中感受漂浮、浮游、下潛與自然呼吸的節奏，釋放壓力、放鬆身心。',
      en: 'A water therapy class for adults at Hualien\'s pristine sea. Experience floating, swimming, diving and natural breathing to release stress and restore balance.',
      ja: '大人向けウォーターセラピー（花蓮）。花蓮の自然海域で浮く・泳ぐ・潜るを体験し、心身のバランスを取り戻します。',
      ko: '화롄 자연 해역에서의 성인 수치료 수업. 떠다니기, 수영, 잠수를 통해 스트레스를 해소하고 균형을 회복합니다.',
    },
    note: {
      zh: '費用不含水域保險費及場地門票費用。課程期限3個月。',
      en: 'Fee excludes water activity insurance and venue admission fees. Course valid for 3 months.',
      ja: '料金には水域保険・施設入場料は含まれません。有効期限3ヶ月。',
      ko: '요금에 수역 보험 및 입장료는 포함되지 않습니다. 유효기간 3개월.',
    },
  },
  {
    id: 'bodywork-001',
    category: 'bodywork',
    names: {
      zh: '好好放鬆・體態平衡身體照護',
      en: 'Relax & Balance Bodywork',
      ja: 'リラックス＆バランス ボディケア',
      ko: '편히 쉬어요・바디케어',
    },
    instructor: '董書良',
    price: [
      { label: { zh: '60分鐘', en: '60 min', ja: '60分', ko: '60분' }, value: 1200 },
      { label: { zh: '90分鐘', en: '90 min', ja: '90分', ko: '90분' }, value: 1800 },
    ],
    schedule: {
      zh: '每週四、五、六 AM9:00–PM8:00',
      en: 'Every Thu, Fri & Sat AM9:00–PM8:00',
      ja: '毎週木・金・土曜日 AM9:00–PM8:00',
      ko: '매주 목·금·토요일 AM9:00–PM8:00',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-bodywork.png',
    emoji: '🙌',
    desc: {
      zh: '以人體肌肉筋膜結構平衡手法，徒手調整身體結構，達到體態平衡的身心愉悅。',
      en: 'Manual therapy using myofascial structural balancing techniques to realign the body and achieve physical and mental wellbeing.',
      ja: '筋膜構造バランス手技により体の構造を整え、体態バランスと心身の快適さを実現します。',
      ko: '근막 구조 균형 기법으로 신체 구조를 정렬하여 체형 균형과 심신의 편안함을 달성합니다.',
    },
    note: {
      zh: '寶芝林人體肌肉筋膜結構平衡手法。勞動部核發中華民國技術士——民俗調理業傳統整復推拿。',
      en: 'Baozhi Lin myofascial structural balance method. Licensed by the Ministry of Labor, R.O.C. — Traditional Folk Therapy Massage Technician.',
      ja: '寶芝林筋膜構造バランス手技。労働部認定中華民国技術士—民間療法伝統整復推拿。',
      ko: '바오즈린 근막 구조 균형 기법. 노동부 공인 중화민국 기술사—민간요법 전통 정복 추나.',
    },
  },
  {
    id: 'bodywork-002',
    category: 'bodywork',
    names: {
      zh: '私人導師課（預約制）',
      en: 'Private Sessions (By Appointment)',
      ja: 'プライベートレッスン（予約制）',
      ko: '개인 레슨 (예약제)',
    },
    instructor: 'Candy / Monkey / 董書良',
    price: [
      { label: { zh: '請洽詢', en: 'Please inquire', ja: 'お問い合わせ', ko: '문의 바랍니다' }, value: 'market' },
    ],
    schedule: {
      zh: '預約制，請洽 LINE',
      en: 'By appointment — contact LINE',
      ja: '予約制 — LINEでお問い合わせ',
      ko: '예약제 — LINE 문의',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-bodywork.png',
    emoji: '⭐',
    desc: {
      zh: '由 Candy、Monkey 或董書良老師提供一對一私人導師課程，依個人需求量身規劃，適合希望深度學習或有特殊身體需求者。',
      en: 'One-on-one private sessions with Candy, Monkey, or Teacher Dong. Customized to your personal needs — ideal for those seeking in-depth learning or with specific body concerns.',
      ja: 'Candy・Monkey・董老師によるマンツーマンプライベートレッスン。個人のニーズに合わせたプログラム。',
      ko: 'Candy, Monkey 또는 동 선생님과의 1:1 개인 레슨. 개인 필요에 맞춘 맞춤 프로그램.',
    },
    note: {
      zh: '費用依內容與時長而定，請加入官方 LINE 詢問。',
      en: 'Fee depends on content and duration. Please contact via official LINE.',
      ja: '料金は内容・時間により異なります。公式LINEへお問い合わせください。',
      ko: '요금은 내용과 시간에 따라 다릅니다. 공식 LINE으로 문의하세요.',
    },
  },
  {
    id: 'yoga-001',
    category: 'yoga',
    names: {
      zh: '和緩流動瑜珈',
      en: 'Gentle Flow Yoga',
      ja: '緩やかなフローヨガ',
      ko: '부드러운 플로우 요가',
    },
    instructor: 'Monkey',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週二 19:45–21:15',
      en: 'Every Tuesday 19:45–21:15',
      ja: '毎週火曜日 19:45–21:15',
      ko: '매주 화요일 19:45–21:15',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-yoga-gentle.png',
    emoji: '🧘',
    desc: {
      zh: '修復・安神・放鬆・助眠。一堂以和緩流動為核心的瑜珈課，幫助身體修復、平靜心神、深度放鬆，改善睡眠品質。',
      en: 'Restore · Calm · Relax · Sleep. A gentle flow yoga class designed to help the body recover, calm the mind, achieve deep relaxation, and improve sleep quality.',
      ja: '修復・安静・リラックス・睡眠改善。穏やかなフローを中心としたヨガクラス。',
      ko: '회복・안정・이완・수면 개선. 부드러운 플로우를 중심으로 신체 회복, 마음 안정을 목표로 합니다.',
    },
    note: {
      zh: '課程期限3個月。報名10堂以上期課學員，可參與新浪島嶼所有課程，需提前預約。',
      en: 'Course valid for 3 months. Students enrolled in 10+ classes may attend all New Wave Island courses with advance booking.',
      ja: '有効期限3ヶ月。10回以上受講の方は全コース参加可（要事前予約）。',
      ko: '유효기간 3개월. 10회 이상 등록 시 모든 수업 참여 가능 (사전 예약 필요).',
    },
  },
  {
    id: 'bmc-001',
    category: 'bmc',
    names: {
      zh: '美好嫻柔',
      en: 'Graceful BMC',
      ja: '美しく穏やかに',
      ko: '아름답고 우아하게',
    },
    instructor: 'Joanna',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週三 18:00–19:30',
      en: 'Every Wednesday 18:00–19:30',
      ja: '毎週水曜日 18:00–19:30',
      ko: '매주 수요일 18:00–19:30',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-graceful-bmc.png',
    emoji: '✨',
    desc: {
      zh: '以「身心平衡技法 Body Mind Centering」為基礎的嫻柔課程。適合正經歷身心修復者、無任何舞蹈運動經驗者，以及有舞蹈經驗人士、專業舞者。',
      en: 'A graceful movement class based on Body Mind Centering. Suitable for those in physical/mental recovery, beginners with no dance experience, and experienced dancers or movement professionals.',
      ja: 'ボディマインドセンタリングをベースにした穏やかなムーブメントクラス。心身回復中の方から専門ダンサーまで歓迎。',
      ko: '바디 마인드 센터링을 기반으로 한 우아한 움직임 수업. 심신 회복 중인 분, 운동 경험이 없는 분, 전문 댄서까지 모두 환영합니다.',
    },
    note: {
      zh: '課程期限3個月。報名10堂以上期課學員，可參與新浪島嶼所有課程，需提前預約。',
      en: 'Course valid for 3 months. Students enrolled in 10+ classes may attend all New Wave Island courses with advance booking.',
      ja: '有効期限3ヶ月。10回以上受講の方は全コース参加可（要事前予約）。',
      ko: '유효기간 3개월. 10회 이상 등록 시 모든 수업 참여 가능 (사전 예약 필요).',
    },
  },
  {
    id: 'bmc-002',
    category: 'bmc',
    names: {
      zh: '啟動身心自我療癒',
      en: 'Activate Body-Mind Self-Healing',
      ja: '心身セルフヒーリングの起動',
      ko: '몸과 마음 자기 치유 활성화',
    },
    instructor: 'Candy',
    price: [
      { label: { zh: '單堂體驗', en: 'Single Trial', ja: '単発体験', ko: '단일 체험' }, value: 700 },
      { label: { zh: '4堂期課（共$2600）', en: '4-Class ($2600)', ja: '4回コース（$2600）', ko: '4회 ($2600)' }, value: 650 },
      { label: { zh: '10堂期課（共$5500）', en: '10-Class ($5500)', ja: '10回コース（$5500）', ko: '10회 ($5500)' }, value: 550 },
    ],
    schedule: {
      zh: '每週一 14:00–15:30',
      en: 'Every Monday 14:00–15:30',
      ja: '毎週月曜日 14:00–15:30',
      ko: '매주 월요일 14:00–15:30',
    },
    location: {
      zh: '台東市開封街370號2樓之1',
      en: '2F-1, No.370, Kaifeng St., Taitung City',
      ja: '台東市開封街370号2階の1',
      ko: '타이퉁시 카이펑가 370호 2층-1',
    },
    image: 'course-bmc.png',
    emoji: '✨',
    desc: {
      zh: '以「身心平衡技法 Body Mind Centering」為主題的身體動作課程。適合正經歷身心修復階段者、無任何舞蹈運動經驗者，毋需高難度技巧，有舞蹈經驗人士、專業舞者歡迎。',
      en: 'A movement class based on Body Mind Centering. Suitable for those in physical/mental recovery, beginners with no dance experience, and experienced dancers or movement professionals.',
      ja: 'ボディマインドセンタリングをテーマにしたムーブメントクラス。心身回復中の方から専門ダンサーまで歓迎。',
      ko: '바디 마인드 센터링을 주제로 한 움직임 수업. 심신 회복 중인 분부터 전문 댄서까지 모두 환영합니다.',
    },
    note: {
      zh: '課程期限3個月。報名10堂以上期課學員，可參與新浪島嶼所有課程，需提前預約。',
      en: 'Course valid for 3 months. Students enrolled in 10+ classes may attend all New Wave Island courses with advance booking.',
      ja: '有効期限3ヶ月。10回以上受講の方は全コース参加可（要事前予約）。',
      ko: '유효기간 3개월. 10회 이상 등록 시 모든 수업 참여 가능 (사전 예약 필요).',
    },
  },
]

export const categories: Category[] = [
  { id: 'movement', names: { zh: '身體流動類', en: 'Movement', ja: 'ボディムーブメント', ko: '바디 무브먼트' } },
  { id: 'ocean',    names: { zh: '藍色療癒類', en: 'Ocean Healing', ja: 'ブルーヒーリング', ko: '블루 힐링' } },
  { id: 'bodywork', names: { zh: '體態照護類', en: 'Bodywork', ja: 'ボディケア', ko: '바디케어' } },
  { id: 'yoga',     names: { zh: '瑜珈類', en: 'Yoga', ja: 'ヨガ', ko: '요가' } },
  { id: 'bmc',      names: { zh: '身心平衡類', en: 'Mind-Body', ja: 'ボディマインド', ko: '바디마인드' } },
]

export const storeInfo: StoreInfo = {
  name:    { zh: '新浪島嶼', en: 'New Wave Island', ja: '新浪島嶼', ko: '신랑 섬' },
  address: {
    zh: '台東市開封街370號2樓之1',
    en: '2F-1, No.370, Kaifeng St., Taitung City',
    ja: '台東市開封街370号2階の1',
    ko: '타이퉁시 카이펑가 370호 2층-1',
  },
  phone: '0920-373-643',
  line:  '@832hxihr',
  tagline: {
    zh: '以療癒照顧大家的身心',
    en: 'Healing Your Body & Mind',
    ja: '心身を癒しでケアする',
    ko: '치유로 몸과 마음을 돌봅니다',
  },
  about: {
    zh: '每個人都如同一座島嶼，有其生態的多樣性；而生活就如同一道一道的浪潮，沖刷著我們的人生。我們都要好好的照顧自己這座身心的島嶼，才能面對來自生活的衝擊。',
    en: 'Each of us is like an island, with our own unique ecosystem. Life washes over us like waves upon the shore. We must care for our own island of body and mind to face the impacts that life brings.',
    ja: '私たちは一人ひとりが島のように、独自の生態系を持っています。生活は何度も押し寄せる波のように、私たちの人生を洗い流します。生活の衝撃に立ち向かうために、自分という心身の島をしっかりとケアしましょう。',
    ko: '우리 각자는 고유한 생태계를 가진 하나의 섬과 같습니다. 삶은 파도처럼 우리 인생을 씻어냅니다. 삶의 충격에 맞서기 위해 자신의 몸과 마음이라는 섬을 잘 돌봐야 합니다.',
  },
  priceNote: {
    zh: '動作教育課程：90分鐘/堂。課程期限3個月。報名10堂以上期課學員，可參與新浪島嶼所有課程（需提前預約）。藍色療癒系列不含水域保險費及場地門票費用。',
    en: 'Movement classes: 90 min/session. Course valid 3 months. 10+ class enrollees may join all New Wave Island courses (advance booking required). Ocean Healing series excludes water insurance and venue fees.',
    ja: '動作教育コース：90分/回。有効期限3ヶ月。10回以上受講者は全コース参加可（要事前予約）。ブルーヒーリングシリーズは水域保険・施設入場料除く。',
    ko: '움직임 수업: 90분/회. 유효기간 3개월. 10회 이상 등록자는 모든 수업 참여 가능 (사전 예약 필요). 블루 힐링 시리즈는 수역 보험 및 입장료 미포함.',
  },
}

export const i18n: Record<Lang, Record<string, string>> = {
  zh: {
    aboutTitle: '關於我們',
    serviceTitle: '服務流程',
    flow1Label: '手療',
    flow1Desc: '以人體肌肉筋膜結構平衡的手法，徒手調整身體結構。',
    flow2Label: '動作教育',
    flow2Desc: '在正確的結構上重新學習身體的動作，提升覺察能力。',
    flowNote: '從以上兩個路徑都可以進入，並互相輔助，幫助解決身體不適、正確鍛鍊身心，達到體態平衡的身心愉悅。',
    scheduleTitle: '2026年課表',
    dayMon: '週一', dayTue: '週二', dayWed: '週三', dayThuSat: '週四五六',
    slotMon1: '身心優雅游泳課', slotPrivate: '私人導師／預約制',
    slotPrivateInstructors: 'Candy・Monkey・董書良',
    slotTue1: '身體流動伸展', slotTue2: '和緩流動瑜珈',
    slotWed1: '海洋療癒', slotWed2: '美好嫻柔',
    slotThuFriSat: '好好放鬆・體態平衡身體照護',
    catAll: '全部',
    priceNoteTitle: '費用說明',
    modalSchedule: '上課時間', modalLocation: '上課地點',
    modalPrice: '課程費用', modalDesc: '課程介紹',
    lineBtn: '加入 LINE 預約報名',
    marketPrice: '時價',
  },
  en: {
    aboutTitle: 'About Us',
    serviceTitle: 'Our Approach',
    flow1Label: 'Manual Therapy',
    flow1Desc: 'Myofascial structural balancing to manually realign the body.',
    flow2Label: 'Movement Education',
    flow2Desc: 'Re-learn body movement on correct structure, enhancing body awareness.',
    flowNote: 'Both paths are available independently and complement each other — helping relieve discomfort, build healthy habits, and achieve balance and wellbeing.',
    scheduleTitle: '2026 Class Schedule',
    dayMon: 'Mon', dayTue: 'Tue', dayWed: 'Wed', dayThuSat: 'Thu–Sat',
    slotMon1: 'Graceful Swimming', slotPrivate: 'Private / By Appt.',
    slotPrivateInstructors: 'Candy · Monkey · Dong',
    slotTue1: 'Body Flow & Stretch', slotTue2: 'Gentle Flow Yoga',
    slotWed1: 'Ocean Healing', slotWed2: 'Graceful BMC',
    slotThuFriSat: 'Relax & Balance Bodywork',
    catAll: 'All',
    priceNoteTitle: 'Pricing Notes',
    modalSchedule: 'Schedule', modalLocation: 'Location',
    modalPrice: 'Pricing', modalDesc: 'About This Class',
    lineBtn: 'Book via LINE',
    marketPrice: 'Market',
  },
  ja: {
    aboutTitle: '私たちについて',
    serviceTitle: 'サービスの流れ',
    flow1Label: '手技療法',
    flow1Desc: '筋膜構造バランス手技により体の構造を徒手で整えます。',
    flow2Label: '動作教育',
    flow2Desc: '正しい体の構造の上で動作を学び直し、覚察能力を高めます。',
    flowNote: '両方の経路から入ることができ、互いに補完し合います。身体の不快感を解消し、正しく心身を鍛え、体態バランスと心身の快適さを達成します。',
    scheduleTitle: '2026年クラス時間割',
    dayMon: '月曜', dayTue: '火曜', dayWed: '水曜', dayThuSat: '木〜土',
    slotMon1: '身心優雅スイミング', slotPrivate: 'プライベート／予約制',
    slotPrivateInstructors: 'Candy・Monkey・董老師',
    slotTue1: 'ボディフロー＆ストレッチ', slotTue2: '緩やかなフローヨガ',
    slotWed1: '海洋ヒーリング', slotWed2: '美しく穏やかに',
    slotThuFriSat: 'リラックス＆バランスボディケア',
    catAll: 'すべて',
    priceNoteTitle: '料金について',
    modalSchedule: 'スケジュール', modalLocation: '場所',
    modalPrice: '料金', modalDesc: 'クラス紹介',
    lineBtn: 'LINEで予約する',
    marketPrice: '時価',
  },
  ko: {
    aboutTitle: '저희 소개',
    serviceTitle: '서비스 흐름',
    flow1Label: '도수 치료',
    flow1Desc: '근막 구조 균형 기법으로 신체 구조를 수기로 조정합니다.',
    flow2Label: '동작 교육',
    flow2Desc: '올바른 구조 위에서 신체 동작을 다시 배우고 인식 능력을 향상시킵니다.',
    flowNote: '두 경로 모두 독립적으로 진입할 수 있으며 서로 보완합니다. 신체 불편 해소, 올바른 심신 단련, 체형 균형과 심신 행복을 달성합니다.',
    scheduleTitle: '2026년 수업 시간표',
    dayMon: '월요일', dayTue: '화요일', dayWed: '수요일', dayThuSat: '목~토',
    slotMon1: '우아한 수영 레슨', slotPrivate: '개인 레슨 / 예약제',
    slotPrivateInstructors: 'Candy · Monkey · 동 선생님',
    slotTue1: '바디 플로우 & 스트레칭', slotTue2: '부드러운 플로우 요가',
    slotWed1: '오션 힐링', slotWed2: '아름답고 우아하게',
    slotThuFriSat: '편히 쉬어요・바디케어',
    catAll: '전체',
    priceNoteTitle: '요금 안내',
    modalSchedule: '수업 시간', modalLocation: '수업 장소',
    modalPrice: '수업 요금', modalDesc: '수업 소개',
    lineBtn: 'LINE으로 예약하기',
    marketPrice: '시가',
  },
}
