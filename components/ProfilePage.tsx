import React, { useEffect } from 'react';
import { ArrowLeft, Mail, Instagram } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
  onNavigate: (href: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 資格リストデータ
  const qualifications = [
    "鍼灸師（国家資格）",
    "ムナイキ（Munay-Ki）マスター",
    "レイキ マスター",
    "シータヒーリング® プラクティショナー／インストラクター",
    "タロット講師",
    "九星気学・算命学・四柱推命のオリジナル鑑定",
    "問題解決セラピスト養成講座 修了（矢野惣一先生）",
    "薬膳アドバイザー",
    "WATＣＨセラピー カラーワードアドバイザー"
  ];

  // 波紋アニメーションの設定データ
  const ripples = [
    { top: '20%', left: '20%', size: '300px', duration: '60s', delay: '-25s', type: 'pale' },
    { top: '70%', left: '75%', size: '450px', duration: '75s', delay: '-50s', type: 'gold' },
    { top: '40%', left: '50%', size: '600px', duration: '90s', delay: '-10s', type: 'pale' },
    { top: '80%', left: '30%', size: '350px', duration: '65s', delay: '-60s', type: 'gold' },
  ];

  return (
    <div className="pt-24 pb-20 animate-[fadeIn_1s_ease-out] relative selection:bg-[#C4A962]/20 selection:text-[#9A8445] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FDFCF8] to-[#FCFBF9]">
       
       <style>{`
         @keyframes ripple-pale {
           0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
           20% { opacity: 0.6; }
           100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
         }
         @keyframes ripple-gold {
           0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
           20% { opacity: 0.5; } 
           100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
         }
       `}</style>

       {/* Background: Floating Ripples (Stronger Yellow Gold #D4AF37) */}
       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-100 md:opacity-40">
          {ripples.map((r, i) => (
            <div 
              key={i}
              className={`absolute rounded-full border-[0.5px] box-border ${r.type === 'pale' ? 'border-[#D4AF37]/50' : 'border-[#D4AF37]/80'}`}
              style={{
                top: r.top,
                left: r.left,
                width: r.size,
                height: r.size,
                animation: `${r.type === 'pale' ? 'ripple-pale' : 'ripple-gold'} ${r.duration} linear infinite`,
                animationDelay: r.delay,
                opacity: 0, 
              }}
            />
          ))}
       </div>

       <div className="max-w-3xl mx-auto px-6 relative z-10">
          
          {/* Back Button */}
          <button onClick={onBack} className="group flex items-center gap-2 text-[#C4A962] hover:text-[#A88E4D] transition-colors mb-12 text-[11px] tracking-widest font-serif">
            <ArrowLeft size={14} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            <span>トップページへ戻る</span>
          </button>

          {/* Hero */}
          <div className="text-center space-y-8 mb-16">
             {/* Profile Image */}
             <div className="relative flex justify-center mb-6 group cursor-default">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-tr from-[#C4A962]/20 to-[#FFD700]/10 blur-2xl animate-pulse" />
                
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-[#C4A962]/30 shadow-lg relative z-10 bg-[#FAF9F6] group-hover:border-[#C4A962] transition-all duration-700">
                   <img 
                     src="https://images.unsplash.com/photo-1736497554523-2895f32eb127?auto=format&fit=crop&q=80&w=1000" 
                     alt="太田 慶子" 
                     className="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                   />
                </div>
             </div>
          </div>

          {/* Story Section */}
          <section className="space-y-12 font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.08em] text-center mb-0 animate-[fadeIn_2s_ease-out]">
            
            <div className="space-y-6">
               <p>
                 幼いころのわたしは<br/>
                 世界を言葉よりも先に<br/>
                 音や光 空気の揺らぎ<br/>
                 響きの世界で生きていました
               </p>
               <p>
                 人の気配や場の雰囲気<br/>
                 空間の密度<br/>
                 それは言葉よりも確かで<br/>
                 わたしにとって自然な感覚でした
               </p>
            </div>

            <div className="h-10 w-px bg-gradient-to-b from-[#C4A962]/30 to-transparent mx-auto" />

            <div className="space-y-6">
               <p>
                 人生の中で<br/>
                 さまざまなことが重なり<br/>
                 生きにくさが強まり<br/>
                 感覚を閉じ
               </p>
               <p>
                 世界が色あせ<br/>
                 遠く感じられる日々が続きました
               </p>
            </div>

            <div className="space-y-6 bg-white/40 p-8 md:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-10px_rgba(196,169,98,0.1)]">
               <p>
                 鍼灸や心理学 ヒーリング<br/>
                 瞑想などを通して<br/>
                 心と身体が<br/>
                 少しずつゆるみはじめ
               </p>
               <p className="font-medium text-zinc-800">
                 ――あ 知っている<br/>
                 この静寂 この安心
               </p>
            </div>

            <div className="space-y-6">
               <p>
                 それは新しく得たものではなく<br/>
                 もともと在る世界へ<br/>
                 還ってゆく体験でした
               </p>
               <p>
                 思考や役割がほどけ<br/>
                 言葉より前の<br/>
                 理由も条件もなく<br/>
                 ただ在る 無条件の愛の世界
               </p>
               <p>
                 自然に調律される 今ここ
               </p>
               <p>
                 静けさと安心に<br/>
                 そっと還ってゆく時間が<br/>
                 今ここにあります
               </p>

               {/* Name Block */}
               <div className="mt-48 md:mt-72 text-center space-y-2 animate-[fadeIn_3s_ease-out]">
                   <p className="serif text-base md:text-xl text-zinc-800 tracking-[0.2em] font-medium">太田 慶子<span className="text-[10px] ml-3 font-light text-[#C4A962] tracking-widest">Keiko Ota</span></p>
                   <p className="serif text-[10px] text-zinc-500 tracking-[0.1em]">Social Wing代表取締役</p>
               </div>
            </div>
         </section>

          {/* Qualifications: Moved below Name Block */}
          <section className="max-w-xl mx-auto mb-20 mt-16 px-8 py-12 bg-white/40 relative shadow-[0_8px_30px_-10px_rgba(196,169,98,0.15)] rounded-[3rem]">
            <div className="text-center mb-8">
               <h3 className="serif text-base text-zinc-800 tracking-[0.25em] pb-2 border-b border-[#C4A962]/20 inline-block px-8">取得資格</h3>
            </div>
            
            <ul className="space-y-3 text-center font-serif text-[12px] md:text-[14px] text-zinc-600 tracking-[0.05em] leading-relaxed">
               {qualifications.map((item, i) => (
                 <li key={i} className="flex items-center justify-center gap-2 group transition-all duration-300 hover:text-[#A88E4D]">
                   <span className="w-1 h-1 rounded-full bg-[#C4A962]/30 group-hover:bg-[#C4A962] transition-colors duration-300" />
                   <span>{item}</span>
                   <span className="w-1 h-1 rounded-full bg-[#C4A962]/30 group-hover:bg-[#C4A962] transition-colors duration-300" />
                 </li>
               ))}
            </ul>
          </section>

          {/* Contact Section */}
          <div className="text-center pb-12 pt-16 space-y-8">
             <div className="relative inline-block pb-6">
               <h3 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] drop-shadow-[0_2px_8px_rgba(196,169,98,0.2)]">ご予約・お問い合わせ</h3>
             </div>
             
             <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
               InstagramのDM または 下記フォームより<br/>
               お気軽にご連絡ください
             </p>
             
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
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
                   <span className="text-[11px] tracking-widest text-zinc-600 group-hover:text-[#C4A962] transition-colors">お問い合わせフォーム</span>
                </a>
             </div>
          </div>

       </div>
    </div>
  );
};