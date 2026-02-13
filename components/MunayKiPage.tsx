import React, { useEffect, useState } from 'react';
import { ArrowLeft, Instagram, Mail, ChevronDown, ChevronUp, MapPin, ExternalLink } from 'lucide-react';

interface MunayKiPageProps {
  onBack: () => void;
  onNavigate: (href: string) => void;
}

const rites = [
  {
    title: "第1の儀式｜保護の儀式（バンド・オブ・パワー）",
    desc: "エネルギーフィールド（オーラ）に、自然な保護と境界が整います。\n守るために力を入れるのではなく、もともとの自然な境界が思い出される感覚です",
    effects: [
      "人と会った後の疲れが軽くなる",
      "境界がはっきりし、無理な同調が減る",
      "安心してその場に居られる感覚"
    ]
  },
  {
    title: "第2の儀式｜癒しの儀式（ヒーリング・コード）",
    desc: "過去や家系から引き継いだ「傷のパターン」が、癒しの回路へと置き換わります。\n感情が一時的に動く場合もありますが、浄化よりも統合が起こることが多いです。",
    effects: [
      "同じ感情パターンに巻き込まれにくくなる",
      "出来事への反応が穏やかになる",
      "理由のない安心感が増える"
    ]
  },
  {
    title: "第3の儀式｜調和の儀式（セイカース・ライト）",
    desc: "身体・心・エネルギーのズレが整い、全体の調和が促されます。\n治そうとするのではなく、本来のリズムに戻るプロセスです。",
    effects: [
      "呼吸が深くなる",
      "身体感覚がはっきりする",
      "無理な緊張が抜けやすくなる"
    ]
  },
  {
    title: "第4の儀式｜シャーマンの儀式（透視・共鳴）",
    desc: "見えない領域との自然な感覚적つながりが回復します。\n何かが見えるようになる必要はありません。\n感じ取る力が日常レベルで静かに戻る感覚です。",
    effects: [
      "直感的な選択がしやすくなる",
      "偶然が増えたように感じる",
      "世界が少し立体的に感じられる"
    ]
  },
  {
    title: "第5の儀式｜大地の儀式（パチャママ）",
    desc: "大地とのつながりが深まり、「ここに居ていい」という感覚が安定します\nスピリチュアルに浮き上がるのではなく、現実に根づく力です。",
    effects: [
      "足元がしっかりする感覚",
      "不安や焦りが減る",
      "現実的な選択が楽になる"
    ]
  },
  {
    title: "第6の儀式｜時間の儀式（リネージュ）",
    desc: "過去や未来への過剰な結びつきがほどけ、「今ここ」に戻りやすくなります。\n忘れるのではなく、必要以上に引きずられなくなる感覚です。",
    effects: [
      "過去の出来事に振り回されにくくなる",
      "未来への不安が軽減される",
      "今やるべきことが自然に分かる"
    ]
  },
  {
    title: "第7の儀式｜創造の儀式（ドリーマー）",
    desc: "個人を超えた視点で、未来や可能性を感じ取る感覚がひらきます。\n努力して夢を見るのではなく、自然に流れに乗る感覚です。",
    effects: [
      "無理なく方向性が見えてくる",
      "人生の流れを信頼しやすくなる",
      "大きな視点で物事を捉えられる"
    ]
  },
  {
    title: "第8の儀式｜光の身体の儀式（ホモ・ルミナス）",
    desc: "自分を「役割」ではなく「存在」として感じる感覚が安定します。\n特別な存在になるのではなく、余分な力が抜ける方向の変化です。",
    effects: [
      "評価に左右されにくくなる",
      "そのままで居られる安心感",
      "力まない集中状態"
    ]
  },
  {
    title: "第9の儀式｜創造と祈りの儀式（スチュワード）",
    desc: "生きることそのものが,祈りや奉仕として自然に表現され始めます。\n何かを成し遂げる使命感ではなく、\n在り方そのものが世界と調和していく感覚です。",
    effects: [
      "行動が自然に一致してくる",
      "無理なく人や世界と関われる",
      "生き方に静かな納得感が生まれる"
    ]
  }
];

const generalFaqs = [
  { q: "Q1. 特別なスピリチュアル能力や感覚は必要ですか？", a: "必要ありません。今ここに在り、身体と呼吸を大切にすることだけで十分です。" },
  { q: "Q2. 人生が変わったり、覚醒が起こりますか？", a: "変化や覚醒が目的ではありません。自然に力を抜ける、選択がやさしくなる、といった形で本来の在り方に戻るプロセスです。" },
  { q: "Q3. 受けた後、何かを続けて行う必要はありますか？", a: "特別な修行やワークは不要です。直感のままにしたいことしたいように。日常の中で静かに根づきます。" },
  { q: "Q4. 宗教や信仰と関係がありますか？", a: "ムナイキは宗教ではありません。信じることや教えに従う必要はなく、自分自身として立つ感覚を大切にします。" },
  { q: "Q5. どんな人に向いていますか？", a: "何者かになろうとすることに疲れている方\n自然体で生きたい方\n癒そう、変えようとすることから離れたい方\n静かな時間の中で自分に還りたい方\n劇的な変化を求める方には合わない場合があります。" }
];

const testimonials = [
  {
    name: "Y・T様",
    text: "今までも穏やかで平和な気持ちはあったけれど、「至福」を感じたり、夜寝る前に楽しい気持ちになったり。\nいらないものが取れて、身体が軽くなり、本当の意味で地に足がついて歩いている感覚。\n目に入るものが色鮮やかに、そこに在るだけで美しく感じられるようになりました。"
  },
  {
    name: "M・K様",
    text: "蝶々のように脱皮して、身体が光輝いて軽くなった。\n今まで気づいていなかった身体の感覚が分かるようになり、冷え性だったけれど、全身が内側から燃えているような感覚。\n身体のエネルギーがガラッと変わった。"
  },
  {
    title: "伝授中、身体が熱くなったり、手がピリピリしたり。\n思考がジャマで、脳のスピードはもっと遅くてもいいのに…と感じました。ムナイキ深かった♪\n自分の闇をあぶり出し、ビジョンがクリアに見えるようになり、感覚を信じていくことを実感。\n見えているものへのジャッジがなくなり、自分の信じる道を,自分の道として歩き出した感覚です。",
    name: "T・Y様",
    text: "伝授中、身体が熱くなったり、手がピリピリしたり。\n思考がジャマで、脳のスピードはもっと遅くてもいいのに…と感じました。ムナイキ深かった♪\n自分の闇をあぶり出し、ビジョンがクリアに見えるようになり、感覚を信じていくことを実感。\n見えているものへのジャッジがなくなり、自分の信じる道を,自分の道として歩き出した感覚です。"
  },
  {
    name: "M・H様",
    text: "愛がゴツゴツとした岩のようだったけれど、ハートがガラスのようにやわらぎ癒された。\nチャクラの意味を知っていたけれど、「活性」の本当の意味が体感として分かった。\n身体も内側から浄化された感覚。"
  },
  {
    name: "M・I様",
    text: "儀式と聞いてもっとぐったりするイメージだったけれど、良いエネルギーで満たされた。\n喉・第三の目のネガティブなエネルギーを手放せた感覚。\n第一・第二チャクラがしっかりしたと確信。\n本当の魂の目的に触れたように思いました。"
  },
  {
    name: "M・O様",
    text: "慶子さんから愛が放たれているのは間違いいないという感覚。\n魂が望んでいることが分かり、胸にジーンとくるものがあり、涙が止まりませんでした。\nエネルギーを送る・受取る感覚が力はっきり体感でき、ムナイキ伝授を受けて本当に良かったです。"
  },
  {
    name: "Y・T様",
    text: "二日目、自分の変化を強く感じ、楽しんで受けることができました。\n三日目には、体を覆っていた厚い殻を一枚脱いだような、新しい自分になった感覚がありました。"
  }
];

const misconceptions = [
  { q: "Q1. 9つすべてをはっきり体感しないといけませんか？", a: "いいえ。強く体感する儀式もあれば、静かに感じるものもあります。理解や感覚より先に、身体や日常に静かに影響していく儀式です。" },
  { q: "Q2. 9つの儀式は順番通りに起こりますか？", a: "起こりません。必要な層が、必要な分だけ、自然にひらいていきます。" },
  { q: "Q3. 何も感じなかったのですが、失敗でしょうか？", a: "失敗ではありません。静かな儀式ほど、その場では分かりにくいことがあります。後から呼吸や選択の変化として現れることが多いです。" },
  { q: "Q4. 感情が揺れることはありますか？", a: "場合によってありますが、感情の浄化が目的ではありません。自然に落ち着く方向へ向かいます。" },
  { q: "Q5. 儀式で能力が開きますか？", a: "能力を開くことが目的ではありません。直感や選択力が自然に戻ることはありますが、特別になるものではありません。" },
  { q: "Q6. 9つをすべて受けると完成ですか？", a: "いいえ。ゴールや完成はありません。通過点として自然に変化や深まりが続きます。" },
  { q: "Q7. 受けた後に意識して何かした方がいいですか？", a: "特別なことは不要です。よく休み、身体を大切にする日常が一番大切です。" },
  { q: "Q8. 他の人と比べて進みが遅い気がします", a: "比べる必要はありません。静かで何も起きていないように見えることが、その人にとって自然な場合もあります。" },
  { q: "Q9. 途中で分からなくなったり、疑問が出ても大丈夫ですか？", a: "もちろん大丈夫です。分からなさや疑問もプロセスの一部で、自然に統合されていきます。" },
  { q: "Q10. 受けっぱなしでも意味がありますか？", a: "あります。理解や活用を前提にせず、必要な時に必要な形で日常に現れます。安心の中で,自然に根づいていく通過儀礼です。" }
];

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-sm border border-[#C4A962]/20 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-[#C4A962]/5 transition-colors group"
      >
        <span className="text-zinc-800 tracking-wider text-[11px] md:text-sm font-medium group-hover:text-[#C4A962] transition-colors">{title}</span>
        {isOpen ? (
          <ChevronUp size={16} strokeWidth={1} className="text-[#C4A962]" />
        ) : (
          <ChevronDown size={16} strokeWidth={1} className="text-zinc-400 group-hover:text-[#C4A962] transition-colors" />
        )}
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100 border-t border-[#C4A962]/10' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const IncaSunBackground = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] -z-10 opacity-[0.06] pointer-events-none select-none">
    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_180s_linear_infinite]">
      <defs>
        <linearGradient id="incaSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <g transform="translate(100,100)">
        {[...Array(16)].map((_, i) => (
          <path 
            key={`ray-${i}`} 
            d="M -4 -60 L 0 -90 L 4 -60 Z" 
            fill="none" 
            stroke="url(#incaSunGrad)" 
            strokeWidth="0.8" 
            transform={`rotate(${i * 22.5})`} 
          />
        ))}
         {[...Array(16)].map((_, i) => (
          <line 
            key={`ray-s-${i}`} 
            x1="0" y1="-50" x2="0" y2="-58" 
            stroke="url(#incaSunGrad)" 
            strokeWidth="0.5" 
            transform={`rotate(${i * 22.5 + 11.25})`} 
          />
        ))}
        <circle r="45" fill="none" stroke="url(#incaSunGrad)" strokeWidth="0.8" />
        <circle r="35" fill="none" stroke="url(#incaSunGrad)" strokeWidth="0.5" />
        <circle r="10" fill="url(#incaSunGrad)" opacity="0.3" />
      </g>
    </svg>
  </div>
);

export const MunayKiPage: React.FC<MunayKiPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 animate-[fadeIn_1s_ease-out] relative selection:bg-[#C4A962]/20 selection:text-[#C4A962] overflow-x-hidden">
       <div className="fixed inset-0 z-0 pointer-events-none flex justify-between overflow-hidden">
          <div className="relative w-24 md:w-48 h-full">
              <svg width="100%" height="100%">
                  <defs>
                      <pattern id="inca-left" x="0" y="0" width="60" height="100" patternUnits="userSpaceOnUse">
                           <path d="M0 100 L0 80 L15 80 L15 60 L30 60 L30 40 L45 40 L45 20 L60 20 L60 100 Z" 
                                 fill="none" stroke="#C4A962" strokeWidth="0.5" strokeOpacity="0.2" />
                           <path d="M0 0 L0 20 L15 20 L15 40 L30 40 L30 60 L45 60 L45 80 L60 80 L60 0 Z" 
                                 fill="none" stroke="#C4A962" strokeWidth="0.5" strokeOpacity="0.2" />
                      </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#inca-left)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white" />
          </div>
          <div className="relative w-24 md:w-48 h-full">
               <svg width="100%" height="100%">
                  <defs>
                      <pattern id="inca-right" x="0" y="0" width="60" height="100" patternUnits="userSpaceOnUse">
                           <path d="M60 100 L60 80 L45 80 L45 60 L30 60 L30 40 L15 40 L15 20 L0 20 L0 100 Z" 
                                 fill="none" stroke="#C4A962" strokeWidth="0.5" strokeOpacity="0.2" />
                           <path d="M60 0 L60 20 L45 20 L45 40 L30 40 L30 60 L15 60 L15 80 L0 80 L0 0 Z" 
                                 fill="none" stroke="#C4A962" strokeWidth="0.5" strokeOpacity="0.2" />
                      </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#inca-right)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white" />
          </div>
       </div>

       <div className="relative z-10">
          <div className="max-w-3xl mx-auto px-6 mb-8">
            <button onClick={onBack} className="group flex items-center gap-2 text-[#C4A962] hover:text-[#A88E4D] transition-colors text-[11px] tracking-widest font-serif">
                <ArrowLeft size={14} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
                <span>トップページへ戻る</span>
            </button>
          </div>

          <div className="w-full h-[50vh] md:h-[65vh] relative mb-20 overflow-hidden shadow-sm animate-[fadeIn_1.5s_ease-out]">
            <img 
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1920&auto=format&fit=crop" 
                alt="Machu Picchu" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[30s] ease-linear"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
          </div>

          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center space-y-6 mb-20">
              <div className="relative inline-block pb-4">
                <h1 className="serif text-xl md:text-3xl text-zinc-800 tracking-[0.2em] leading-normal drop-shadow-[0_2px_10px_rgba(196,169,98,0.2)]">
                  ムナイキ伝授
                </h1>
              </div>
              <p className="font-serif text-[15px] md:text-base text-zinc-600 tracking-[0.2em] drop-shadow-[0_1px_2px_rgba(196,169,98,0.2)]">
                古代インカシャーマンの儀式
              </p>
            </div>

            <div className="space-y-16 font-serif text-zinc-700 leading-loose tracking-[0.1em] text-justify md:text-center">
              <section className="space-y-8">
                  <p className="text-[13px] md:text-[15px]">
                    ムナイキは,何かを得るための儀式ではありません。<br/>
                    覚醒や能力を高めるための修行でもありません。
                  </p>
                  <p className="text-[13px] md:text-[15px]">
                    それは,あなたが本来すでに在る在り方へ,静かに還ってゆくための通過儀礼です。
                  </p>
                  <div className="h-10 w-px bg-gradient-to-b from-[#C4A962]/50 to-transparent mx-auto" />
                  <p className="text-[13px] md:text-[15px]">
                    アンデスの人々は,人間を「自然から切り離された存在」とは捉えてきませんでした。<br/>
                    山も 風も 川も 星も そして人間も──<br/>
                    すべては同じ いのちの連なり（アイニ） の中に在りと感じてきたのです。
                  </p>
                  <p className="text-[13px] md:text-[15px]">
                    ムナイキは,その連なりを思い出すための,やさしく,深遠な祈りの儀式です。
                  </p>
              </section>

              <section className="py-20 text-center relative overflow-hidden">
                  <IncaSunBackground />
                  <h3 className="text-base md:text-xl text-center text-zinc-800 tracking-[0.2em] mb-10 border-b border-[#C4A962]/20 pb-4 inline-block px-8 relative z-10">ムナイキとは</h3>
                  <div className="space-y-8 text-center relative z-10">
                    <p className="text-[13px] md:text-[15px]">
                      ムナイキ（Munay-Ki）は,古代インカ／アンデスに伝わるイニシエーション（通過儀礼）です。
                    </p>
                    <div className="py-4 space-y-2">
                      <p className="text-[15px] md:text-lg"><span className="text-zinc-700 font-medium">Munay</span>：無条件の愛・聖なる愛</p>
                      <p className="text-[15px] md:text-lg"><span className="text-zinc-700 font-medium">Ki</span>：生命エネルギー・力</p>
                    </div>
                    <p className="text-[13px] md:text-[15px]">
                      つまりムナイキとは,「無条件の愛のエネルギーで生きる在り方」そのものを指します。
                    </p>
                    <p className="text-[13px] md:text-[15px]">
                      これは「変わる」ことでも,「高みに行く」ことでもありません。<br/>
                      自然・大地・宇宙と響き合いながら,あるがままで在ること。
                    </p>
                  </div>
              </section>

              <section className="space-y-8 text-center">
                  <div className="inline-block px-4 py-1 border-t border-b border-[#C4A962]/30 mb-2">
                    <h3 className="text-base text-zinc-800 tracking-[0.2em]">ホモ・ルミナスという感覚</h3>
                  </div>
                  <p className="text-[13px] md:text-[15px]">
                    私たちは本来,思考や役割以前に,光と響きとして在る存在です。
                  </p>
                  <p className="text-[13px] md:text-[15px]">
                    ムナイキの儀式は,その光の身体を「つくる」ものではありません。
                  </p>
                  <p className="text-[13px] md:text-[15px]">
                    力づくで何かを起こすことはありません。<br/>
                    起きるとしたら,ただ── 思い出され,還っていくだけです。
                  </p>
              </section>

              <section className="py-20 text-center relative overflow-hidden">
                  <IncaSunBackground />
                  <h3 className="text-base text-zinc-800 tracking-[0.2em] mb-8 font-medium relative z-10">シャーマンという誠に在り方</h3>
                  <div className="space-y-6 relative z-10">
                    <p className="text-[13px] md:text-[15px]">
                      アンデスにおけるシャーマンとは,何かを“する人”ではなく,在り方そのものです。
                    </p>
                    <div className="py-4 space-y-4 text-[13px] md:text-[15px]">
                      <p>彼らは</p>
                      <p>自然と人のあいだに立ち</p>
                      <p>見えない世界と日常をつなぎ</p>
                      <p>いのちの流れが滞らないよう,共に在る</p>
                    </div>
                    <p className="text-[13px] md:text-[15px]">
                      癒す人でも,導く人ではありません。<br/>
                      共に響き,共に祈る存在です。
                    </p>
                    <p className="text-[13px] md:text-[15px]">
                      このムナイキ伝授も,「教える／導く」という形では行われません。
                    </p>
                  </div>
              </section>

              <section className="space-y-10">
                  <div className="text-center space-y-6">
                    <h3 className="text-base md:text-xl text-zinc-800 tracking-[0.2em]">ムナイキ｜9つの儀式</h3>
                  </div>
                  <div className="max-w-2xl mx-auto space-y-4">
                    <Accordion title="9つの儀式について">
                        <div className="flex flex-col gap-6 text-left pt-4">
                          {rites.map((rite, i) => (
                            <div key={i} className="bg-white/50 p-5 rounded border border-zinc-100">
                              <h4 className="text-zinc-700 font-medium mb-2 text-[13px] md:text-[15px]">{rite.title}</h4>
                              <p className="text-[11px] md:text-[13px] text-zinc-600 leading-relaxed whitespace-pre-wrap mb-4">{rite.desc}</p>
                              {rite.effects && (
                                <div className="bg-white/40 p-3 rounded text-[11px] text-zinc-600 border border-[#C4A962]/10">
                                  <p className="font-medium text-[10px] md:text[11px] text-[#C4A962] mb-1.5 tracking-wider">受け取った後に起こりやすいこと</p>
                                  <ul className="list-disc list-inside space-y-1 opacity-80 pl-1">
                                    {rite.effects.map((effect, j) => (
                                      <li key={j}>{effect}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                          <div className="mt-4 p-5 bg-[#C4A962]/5 border border-[#C4A962]/20 rounded-sm text-center">
                              <h4 className="text-zinc-700 font-medium mb-3 tracking-widest text-[10px] border-b border-[#C4A962]/20 inline-block pb-1">大切なこと</h4>
                              <div className="text-[11px] md:text-[13px] text-zinc-600 leading-loose space-y-4">
                                <p>9つすべてを「分かる」「感じる」必要はありません</p>
                                <p>体験の強さ・順番・現れ方には個人差があります</p>
                                <p>何も起こらないように感じても,プロセスは進んでいます</p>
                                <div className="w-6 h-px bg-[#C4A962]/30 mx-auto my-3" />
                                <p>ムナイキは,理解よりも先に,<br/>身体と暮らしの中で静かに統合されていく儀式です。</p>
                                <p>分からなさも含めて,安心して委ねてください。</p>
                              </div>
                          </div>
                        </div>
                    </Accordion>
                    <Accordion title="ムナイキについてのよくある誤解">
                        <div className="p-5 text-left text-[11px] md:text-[13px] text-zinc-600 bg-white/40 space-y-6 leading-loose">
                           {misconceptions.map((item, i) => (
                             <div key={i} className="space-y-2">
                               <h5 className="font-medium text-zinc-700 border-l-2 border-[#C4A962] pl-3 text-sm">{item.q}</h5>
                               <p className="text-zinc-600 pl-4">{item.a}</p>
                             </div>
                           ))}
                        </div>
                    </Accordion>
                    <Accordion title="体験された方の声（参考として）">
                        <div className="grid grid-cols-1 gap-5 text-left pt-4">
                          {testimonials.map((t, i) => (
                             <div key={i} className="bg-white/50 p-5 rounded border border-zinc-100 italic text-zinc-600 text-[11px] md:text-[13px] leading-relaxed">
                              <p className="mb-4 whitespace-pre-wrap">{t.text}</p>
                              <p className="text-right text-[#C4A962] not-italic font-medium">— {t.name}</p>
                            </div>
                          ))}
                        </div>
                    </Accordion>
                  </div>
              </section>

              <section className="max-w-2xl mx-auto space-y-12 py-16 text-center">
                  <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-[#C4A962]/10 space-y-10">
                    <div className="space-y-4">
                      <h3 className="serif text-base text-zinc-800 tracking-[0.2em] font-medium border-b border-[#C4A962]/20 pb-2 inline-block mx-auto">料金</h3>
                      <p className="serif text-2xl md:text-4xl text-[#C4A962] tracking-widest font-medium">110,000<span className="text-[10px] ml-1 text-zinc-600 font-sans tracking-normal">円（税込）</span></p>
                    </div>
                    
                    <div className="h-px bg-[#C4A962]/10 w-1/3 mx-auto" />

                    <div className="space-y-3 text-center">
                      <div className="flex items-center justify-center gap-2 text-[#C4A962] mb-1">
                        <MapPin size={18} />
                        <h3 className="serif text-base text-zinc-800 tracking-[0.2em] font-medium">場所</h3>
                      </div>
                      <p className="font-serif text-[15px] md:text-[17px] text-zinc-700 leading-loose">
                        千葉県松戸市 小金市民センター（茶室）
                      </p>
                      <div className="pt-2">
                        <a 
                          href="https://www.city.matsudo.chiba.jp/shisetsu-guide/simin-center/kogane.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] md:text-xs text-[#C4A962] hover:text-[#A88E4D] tracking-widest transition-colors font-serif border-b border-[#C4A962]/30 pb-0.5"
                        >
                          <span>詳細はこちらです</span>
                          <ExternalLink size={12} strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </div>
              </section>

              <section className="max-w-2xl mx-auto space-y-10 py-12 text-center">
                  <h3 className="serif text-base md:text-xl text-zinc-800 tracking-[0.2em] font-medium border-b border-[#C4A962]/20 pb-3 inline-block px-8">伝授のかたち</h3>
                  
                  <div className="space-y-10 text-zinc-700 text-[13px] md:text-[15px] leading-loose">
                    <div className="space-y-3">
                      <p className="text-[15px] font-medium text-zinc-800">ムナイキ伝授</p>
                      <p className="text-[#C4A962] font-medium text-[13px] md:text-[15px]">対面（2日間）＋事前動画資料・瞑想データ</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-2">
                        <h4 className="font-medium text-zinc-800 border-l-2 border-[#C4A962] pl-3 text-sm">事前動画資料</h4>
                        <p className="text-[10px] text-zinc-500 mb-1">インカ・アンデス世界観 / ムナイキ伝授の概要</p>
                        <p className="text-[11px] leading-relaxed">理解を深めるためではなく,伝授の場に身体と心を馴染ませるための時間としてご活用ください。</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-zinc-800 border-l-2 border-[#C4A962] pl-3 text-sm">音声瞑想データ</h4>
                        <p className="text-[11px] leading-relaxed">自宅でも呼吸や身体感覚を通して,静かに準備を受け取れます。</p>
                      </div>
                    </div>

                    <div className="space-y-6 pt-4">
                      <h4 className="font-medium text-zinc-800 text-base">対面伝授（2日間）</h4>
                      <p className="text-[13px] md:text-[15px]">各日 2〜3時間ほど<br/>マンツーマンでその方にとって<br/>必要なタイミングと自然なスピードで進行</p>
                      
                      <div className="bg-white/40 p-5 rounded-xl border border-[#C4A962]/10 space-y-4 text-[11px] md:text-[13px] backdrop-blur-sm">
                        <p className="text-zinc-500">必要に応じて,無理なく以下を組み合わせます。</p>
                        <ul className="space-y-1.5 inline-block text-left">
                          <li>・ 創造の源につながる静かな瞑想</li>
                          <li>・ エネルギーワーク・響きによるサポート</li>
                          <li>・ 古い契約・制約・義務・誓いがほどけるプロセス</li>
                          <li>・ 言葉を通して自然にほどける,おしゃべりリトリート</li>
                        </ul>
                        <p className="pt-3 font-medium text-zinc-800">「伝授」でもあり,同時に「個人セッションを重ねるようなプロセス」でもあります。</p>
                        <p>評価もゴールもなく,あなたの今に必要なことだけが,静かに起こります。</p>
                      </div>
                    </div>

                    <div className="bg-white/30 p-5 rounded-xl text-[10px] md:text-[13px] text-zinc-600 text-left space-y-3 backdrop-blur-sm border border-white/20">
                      <p className="font-medium text-zinc-800">※ 対面2日間の進め方</p>
                      <p>1回目の伝授から,2〜3週間ほど間をあけることをおすすめしています。<br/>受け取ったエネルギーが落ち着き,身体や日常の中で自然な深まりと統合が進むためです。</p>
                      <p>遠方からの方は,2日間連続も可能. 暮らしと身体に合ったペースを大切にします。</p>
                    </div>
                  </div>
              </section>

              <section className="max-w-2xl mx-auto space-y-8">
                  <div className="text-center">
                    <h3 className="serif text-base md:text-xl text-zinc-800 tracking-[0.2em] font-medium border-b border-[#C4A962]/20 pb-3 inline-block px-8">よくあるQ＆A</h3>
                  </div>
                  <div className="space-y-4">
                    {generalFaqs.map((item, i) => (
                      <Accordion key={i} title={item.q}>
                        <div className="p-5 text-left text-[11px] md:text-[13px] text-zinc-600 leading-loose whitespace-pre-wrap">
                          {item.a}
                        </div>
                      </Accordion>
                    ))}
                  </div>
              </section>

              <section id="contact" className="max-w-2xl mx-auto pt-16 pb-20 text-center space-y-8">
                  <div className="space-y-6">
                    <h3 className="serif text-base md:text-xl text-zinc-800 tracking-[0.2em] font-medium">ご予約・お問い合わせ</h3>
                    <p className="text-zinc-600 leading-loose text-[13px] md:text-[15px]">
                      「今がタイミングか分からない」「少し話を聞いてみたい」<br/>
                      そんな状態でも大丈夫です。気軽にお問い合わせください。
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8 border-t border-[#C4A962]/10">
                      <a 
                        href="https://www.instagram.com/toumeihibiki?igsh=aDNjNTl5cHo1NHh4" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex items-center gap-3 bg-white px-8 py-4 rounded-sm border border-[#C4A962]/30 hover:border-[#C4A962] hover:shadow-lg transition-all duration-500 w-full md:w-auto justify-center"
                      >
                         <Instagram strokeWidth={1} size={16} className="text-[#C4A962]" />
                         <span className="text-[10px] tracking-widest text-zinc-600 group-hover:text-[#C4A962] transition-colors">Instagram DM</span>
                      </a>
                      
                      <a 
                        href="https://forms.gle/QVh5SKijhdXk2gEk6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-white px-8 py-4 rounded-sm border border-[#C4A962]/30 hover:border-[#C4A962] hover:shadow-lg transition-all duration-500 w-full md:w-auto justify-center"
                      >
                         <Mail strokeWidth={1} size={16} className="text-[#C4A962]" />
                         <span className="text-[10px] tracking-widest text-zinc-600 group-hover:text-[#C4A962] transition-colors">お問い合わせフォーム</span>
                      </a>
                  </div>
              </section>

              <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em] text-center mt-20">
                山も 風も 星も 人も<br/>
                すべては<br/>
                いのちの連なりの中に在る祈り<br/>
                存在としてのギフトです
              </p>

            </div>
          </div>
       </div>
    </div>
  );
};