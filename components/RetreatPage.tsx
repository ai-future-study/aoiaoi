import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Instagram, Mail } from 'lucide-react';

interface RetreatPageProps {
  onBack: () => void;
  onNavigate: (href: string) => void;
}

export const RetreatPage: React.FC<RetreatPageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // こんな方に向いていますリスト
  const targetAudience = [
    "・思考が優位で 今ここにいられない",
    "・無意識に力が入り 疲れが抜けない",
    "・本音と考えの区別がつかない",
    "・安心と静寂に生きたい",
    "・あるがままのわたしへ還りたい",
    "・「ある」という感覚に安心したい"
  ];

  // 起こりやすい変化リスト
  const changes = [
    "・頭の力が ふっと抜ける",
    "・身体が自然にゆるむ",
    "・あるがままでいいと腑に落ちる",
    "・呼吸が深くなる",
    "・「ある」という感覚が戻る",
    "・安心が広がる"
  ];

  // Simple Flower of Life Ripple Configuration
  const folRipples = [
    { top: '30%', left: '20%', size: '800px', duration: '200s', delay: '0s' },
    { top: '80%', left: '80%', size: '900px', duration: '240s', delay: '-100s' },
  ];

  // Simple Flower of Life Pattern Component
  const FlowerOfLifePattern = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="folRippleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
        </linearGradient>
        <circle id="fol-circle-simple" r="12" fill="none" stroke="url(#folRippleGrad)" strokeWidth="0.15" className="md:stroke-[0.08]" />
      </defs>
      <g transform="translate(50,50)">
         <use href="#fol-circle-simple" x="0" y="0" />
         {[0, 60, 120, 180, 240, 300].map(deg => {
            const rad = deg * Math.PI / 180;
            return <use key={`r1-${deg}`} href="#fol-circle-simple" x={Math.cos(rad)*12} y={Math.sin(rad)*12} />;
         })}
         {[30, 90, 150, 210, 270, 330].map(deg => {
            const rad = deg * Math.PI / 180;
            return <use key={`r2-${deg}`} href="#fol-circle-simple" x={Math.cos(rad)*20.78} y={Math.sin(rad)*20.78} opacity="0.8" />;
         })}
      </g>
    </svg>
  );

  return (
    <div className="pt-24 pb-20 animate-[fadeIn_1s_ease-out] relative selection:bg-[#C4A962]/20 selection:text-[#9A8445] overflow-hidden">
       
       <style>{`
         @keyframes fol-spin-breathe {
           0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.4; }
           50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); opacity: 0.6; }
           100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.4; }
         }
         @media (max-width: 767px) {
           .fol-ripple-0 {
             left: -740px !important;
           }
           .fol-ripple-1 {
             left: calc(100% - 60px) !important;
             opacity: 0.93 !important;
           }
         }
       `}</style>

       {/* Animated Flower of Life Background */}
       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {folRipples.map((r, i) => (
            <div 
              key={i}
              className={`absolute opacity-100 md:opacity-50 fol-ripple-${i}`}
              style={{
                top: r.top,
                left: r.left,
                width: r.size,
                height: r.size,
                animation: `fol-spin-breathe ${r.duration} linear infinite`,
                animationDelay: r.delay,
              }}
            >
              <FlowerOfLifePattern />
            </div>
          ))}
       </div>

       <div className="max-w-3xl mx-auto px-6 relative z-10">
          
          <button onClick={onBack} className="group flex items-center gap-2 text-[#C4A962] hover:text-[#A88E4D] transition-colors mb-12 text-[11px] tracking-widest font-serif">
            <ArrowLeft size={14} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            <span>トップページへ戻る</span>
          </button>

          <div className="text-center space-y-8 mb-20">
             <div className="relative inline-block pb-4">
               <h1 className="serif text-2xl md:text-4xl text-zinc-800 tracking-[0.2em] font-medium leading-normal drop-shadow-[0_2px_10px_rgba(196,169,98,0.2)]">
                 おしゃべりリトリート
               </h1>
             </div>
             <p className="font-serif text-[13px] md:text-[15px] text-[#C4A962] tracking-[0.15em] drop-shadow-[0_1px_2px_rgba(196,169,98,0.2)] leading-relaxed">
               ただ話すだけで<br className="md:hidden"/>今ここに還る
             </p>
          </div>

          <section className="space-y-12 mb-20 md:mb-28 text-center font-serif leading-loose text-zinc-700 tracking-[0.1em]">
             <div className="space-y-8">
                <p className="text-[13px] md:text-[15px]">
                  おしゃべりリトリートは<br/>
                  自分を癒す場でも<br/>
                  問題を解決する場でも<br/>
                  自分を変える場でもありません
                </p>
                <p className="text-[11px] md:text-[12px] text-zinc-500 italic">
                  ※それが自然に起こることはあります
                </p>
                <p className="text-[13px] md:text-[15px]">
                  ただ話し 呼吸し<br/>
                  今ここに在る<br/>
                  <br/>
                  あるがままのわたしへ還る
                </p>
                <p className="text-[13px] md:text-[15px]">
                  そのとき生まれる響きが<br/>
                  内側を自然に調律します
                </p>
             </div>
          </section>

          <section className="bg-white/60 p-8 md:p-12 rounded-2xl mb-20 md:mb-28 border border-[#C4A962]/20 relative overflow-hidden backdrop-blur-sm">
             <h3 className="serif text-base text-center text-zinc-800 tracking-[0.2em] mb-10 font-medium">こんな方に</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto">
                {targetAudience.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="font-serif text-[13px] md:text-[15px] text-zinc-700 tracking-[0.05em] leading-relaxed text-center w-full">{item}</span>
                  </div>
                ))}
             </div>
          </section>

          <section className="bg-white/60 p-8 md:p-12 rounded-2xl border border-[#C4A962]/20 shadow-[inset_0_0_20px_rgba(196,169,98,0.05)] mb-20 md:mb-28 backdrop-blur-sm">
             <h3 className="serif text-base text-center text-zinc-800 tracking-[0.2em] mb-10 font-medium">起こりやすい変化</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl mx-auto">
                {changes.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="font-serif text-[13px] md:text-[15px] text-zinc-700 tracking-[0.1em] text-center w-full">{item}</span>
                  </div>
                ))}
             </div>
          </section>

          <section className="space-y-16 mb-20 md:mb-28">
             <div className="text-center space-y-8">
                <div className="inline-block px-6 py-2 border-t border-b border-[#C4A962]/30 mb-4">
                  <h3 className="serif text-base text-zinc-800 tracking-[0.2em]">どう進むの？</h3>
                </div>
                <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.1em]">
                  あるがまま 話すだけです<br/>
                  <br/>
                  わたしは<br/>
                  あなたの言葉になる前の<br/>
                  響きや沈黙を聴き<br/>
                  言葉を返します<br/>
                  <br/>
                  話すにつれて<br/>
                  中心へ静かに還ってゆく<br/>
                  ──それが自然に起こります
                </p>
             </div>

             <div className="text-center space-y-8 pt-12">
                <div className="inline-block px-6 py-2 border-t border-b border-[#C4A962]/30 mb-4">
                  <h3 className="serif text-base text-zinc-800 tracking-[0.2em]">なぜ「話すだけ」で整うの？</h3>
                </div>
                <div className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.1em] space-y-6">
                   <p>
                     わたしたちは<br/>
                     もともと満ちた存在です
                   </p>
                   <p>
                     思考や緊張 役割が重なると<br/>
                     不安や不足を感じやすくなります
                   </p>
                   <p>
                     安全な場で話すと<br/>
                     そのズレは自然に整います
                   </p>
                </div>
             </div>
          </section>

          <section className="border-t-4 border-[#C4A962]/40 p-10 md:p-16 text-center bg-white/90 backdrop-blur-sm shadow-xl relative overflow-hidden mb-20 md:mb-28 rounded-3xl">
             <div className="absolute inset-0 bg-[#C4A962]/5 pointer-events-none" />
             <div className="relative z-10 space-y-10">
                <h3 className="serif text-base md:text-xl text-zinc-800 tracking-[0.2em] font-medium">料金・時間</h3>
                
                <div className="max-w-xl mx-auto">
                   <div className="bg-white/80 p-6 md:p-8 border border-[#C4A962]/20 rounded-2xl shadow-sm">
                      <p className="serif text-[13px] md:text-[15px] text-zinc-700 tracking-widest font-medium mb-4">対面／Zoom</p>
                      <div className="serif text-lg md:text-2xl text-[#C4A962] tracking-widest font-medium mb-4">
                        60～90<span className="text-[10px] ml-1 text-zinc-600 font-sans tracking-normal">分</span> 22,000<span className="text-[10px] ml-1 text-zinc-600 font-sans tracking-normal">円</span>
                      </div>
                   </div>
                </div>

                <div className="max-w-md mx-auto bg-white/60 p-6 border border-[#C4A962]/20 rounded-xl mt-8 backdrop-blur-sm">
                   <div className="flex items-center justify-center gap-2 mb-3 text-[#C4A962]">
                      <MapPin size={14} />
                      <span className="serif text-[13px] md:text-[15px] tracking-widest font-medium text-zinc-700">場所</span>
                   </div>
                   <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.1em]">
                     千葉県松戸市<br/>
                     小金市民センター（茶室）
                   </p>
                   <div className="pt-2">
                    <a 
                      href="https://www.city.matsudo.chiba.jp/shisetsu-guide/simin-center/kogane.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] md:text-[12px] text-[#C4A962] hover:text-[#A88E4D] tracking-widest transition-colors font-serif border-b border-[#C4A962]/30 pb-0.5"
                    >
                      <span>詳細はこちらです</span>
                    </a>
                  </div>
                </div>
             </div>
          </section>

          <div id="contact" className="text-center pb-12 space-y-8 border-t border-[#C4A962]/20 pt-16">
             <div className="relative inline-block pb-6">
               <h3 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] drop-shadow-[0_2px_8px_rgba(196,169,98,0.2)]">ご予約・お問い合わせ</h3>
             </div>
             
             <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
               InstagramのDM または 下記フォームより<br/>
               お気軽にご連絡ください
             </p>
             
             <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-4">
                <a 
                  href="https://www.instagram.com/toumeihibiki?igsh=aDNjNTl5cHo1NHh4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 bg-white px-8 py-4 rounded-sm border border-[#C4A962]/30 hover:border-[#C4A962] hover:shadow-lg transition-all duration-500 w-full md:w-auto justify-center"
                >
                   <Instagram strokeWidth={1} size={16} className="text-[#C4A962]" />
                   <span className="text-[11px] tracking-widest text-zinc-600 group-hover:text-[#C4A962] transition-colors">Instagram DM</span>
                </a>
                
                <a 
                  href="https://forms.gle/QVh5SKijhdXk2gEk6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white px-8 py-4 rounded-sm border border-[#C4A962]/30 hover:border-[#C4A962] hover:shadow-lg transition-all duration-500 w-full md:w-auto justify-center"
                >
                   <Mail strokeWidth={1} size={16} className="text-[#C4A962]" />
                   <span className="text-[11px] tracking-widest text-zinc-600 group-hover:text-[#C4A962] transition-colors">お問い合わせフォーム</span>
                </a>
             </div>
          </div>
       </div>
    </div>
  );
};