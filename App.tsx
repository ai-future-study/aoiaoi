import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import { MunayKiPage } from './components/MunayKiPage';
import { RetreatPage } from './components/RetreatPage';
import { ProfilePage } from './components/ProfilePage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'munayki' | 'retreat' | 'profile'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    if (href === '#munayki-detail') {
      setView('munayki');
      window.scrollTo(0, 0);
    } else if (href === '#retreat-detail') {
      setView('retreat');
      window.scrollTo(0, 0);
    } else if (href === '#profile-detail') {
      setView('profile');
      window.scrollTo(0, 0);
    } else {
      setView('home');
      if (href.startsWith('#')) {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (href === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-white selection:bg-[#C4A962]/20 selection:text-[#9A8445] font-sans text-zinc-700 overflow-x-hidden">
      
      {/* Global Texture Overlay: Noise for Washi/Airy feel */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      <Navigation onNavigate={handleNavigate} onMenuToggle={setIsMenuOpen} />

      <div className={isMenuOpen ? 'hidden' : ''}>
        {view === 'munayki' ? (
          <MunayKiPage onBack={() => setView('home')} onNavigate={handleNavigate} />
        ) : view === 'retreat' ? (
          <RetreatPage onBack={() => setView('home')} onNavigate={handleNavigate} />
        ) : view === 'profile' ? (
          <ProfilePage onBack={() => setView('home')} onNavigate={handleNavigate} />
        ) : (
          <>
            {/* Hero Section */}
            <header id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-20 md:pt-28 pb-20 md:pb-20">
              
              <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-10 md:space-y-14 max-w-4xl mx-auto">
                <p className="sacred-en text-[#C4A962] text-[12px] md:text-sm tracking-[0.3em] uppercase italic opacity-90 animate-[fadeIn_2s_ease-out] drop-shadow-[0_0_8px_rgba(196,169,98,0.4)]">
                  Resonance & Transparency
                </p>
                
                <div className="relative py-8 md:py-10 px-8 flex justify-center">
                  {/* Multiple Infinity Lines with Light Gold Gradient */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 drop-shadow-[0_0_15px_rgba(196,169,98,0.3)]">
                    <svg className="w-[180%] h-[220%] md:w-[250%] md:h-[300%] overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.1" />
                          <stop offset="20%" stopColor="#C4A962" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.8" />
                          <stop offset="80%" stopColor="#C4A962" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      
                      {[...Array(20)].map((_, i) => {
                        const scale = 0.4 + (i * 0.1);
                        const opacity = Math.max(0.1, 0.6 - (i * 0.025));
                        
                        return (
                          <path 
                            key={i}
                            style={{ 
                              transformOrigin: '300px 100px',
                              transform: `scale(${scale})`
                            }}
                            fill="none" 
                            stroke="url(#goldGradient)" 
                            strokeWidth={0.12} 
                            opacity={opacity}
                            d="M 300 100 C 180 180 50 180 50 100 C 50 20 180 20 300 100 C 420 180 550 180 550 100 C 550 20 420 20 300 100 Z"
                          />
                        );
                      })}
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col items-center animate-[fadeIn_2s_ease-out_0.5s]">
                    <h1 className="text-2xl md:text-4xl text-zinc-800 font-serif tracking-[0.25em] leading-normal pb-4 drop-shadow-[0_2px_10px_rgba(196,169,98,0.2)]">
                      透明な響きへ還る
                    </h1>
                  </div>
                </div>

                <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.2em] max-w-lg animate-[fadeIn_2s_ease-out_1.5s]">
                  がんばることに疲れた<br/>
                  何者かになろうと苦しい<br/>
                  <br/>
                  ただ在ることを<br/>
                  思い出す<br/>
                  <br/>
                  癒すでも 変えるでも 解放でもない<br/>
                  本来の響き 愛に還る<br/>
                  <br/>
                  努力も改善も背伸びいらない<br/>
                  今ここに在ることが<br/>
                  心と身体を調律してくれる<br/>
                  <br/>
                  「あるがままのわたしでいい」<br/>
                  と腑に落ちるとき<br/>
                  「在る」へ反転する<br/>
                  <br/>
                  ここは回帰のフィールド
                </p>
              </div>
              
              {/* Connecting Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#C4A962]/30" />
            </header>

            <main className="max-w-4xl mx-auto px-6 md:px-12 pt-0 md:pt-20 pb-20 relative z-10">
              
              {/* Central Axis Line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#C4A962]/10 pointer-events-none -z-10 hidden md:block" />

              {/* Core Concepts Section */}
              <section className="mb-20 md:mb-40 relative">
                {/* Background: Flower of Life (Resized to ~333px/8.8cm) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[333px] h-[333px] -z-10 opacity-80 md:opacity-60 pointer-events-none">
                  <svg viewBox="66 66 68 68" className="w-full h-full animate-[spin_100s_linear_infinite]">
                    <defs>
                        <linearGradient id="folGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.18" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.18" />
                        </linearGradient>
                      <g id="fol-c">
                          <circle cx="0" cy="0" r="10" fill="none" stroke="url(#folGrad)" strokeWidth="0.1" />
                          <circle cx="0" cy="0" r="8" fill="none" stroke="url(#folGrad)" strokeWidth="0.1" />
                          <circle cx="0" cy="0" r="6" fill="none" stroke="url(#folGrad)" strokeWidth="0.1" />
                          <circle cx="0" cy="0" r="4" fill="none" stroke="url(#folGrad)" strokeWidth="0.1" />
                          <circle cx="0" cy="0" r="2" fill="none" stroke="url(#folGrad)" strokeWidth="0.1" />
                      </g>
                    </defs>
                    <g transform="translate(100,100)">
                        <use href="#fol-c" x="0" y="0" />
                        {[0, 60, 120, 180, 240, 300].map(deg => {
                          const rad = deg * Math.PI / 180;
                          return <use key={deg} href="#fol-c" x={Math.cos(rad)*10} y={Math.sin(rad)*10} />;
                        })}
                        {[30, 90, 150, 210, 270, 330].map(deg => {
                          const rad = deg * Math.PI / 180;
                          return <use key={deg} href="#fol-c" x={Math.cos(rad)*17.32} y={Math.sin(rad)*17.32} />;
                        })}
                        {[0, 60, 120, 180, 240, 300].map(deg => {
                          const rad = deg * Math.PI / 180;
                          return <use key={deg} href="#fol-c" x={Math.cos(rad)*20} y={Math.sin(rad)*20} />;
                        })}
                    </g>
                  </svg>
                </div>

                <div className="grid grid-cols-1 gap-14 text-center max-w-2xl mx-auto py-10 px-4">
                  <div className="rounded-3xl p-8 md:p-0 flex flex-col gap-14 md:gap-16">
                    {/* Hibiki */}
                    <div className="group flex flex-col items-center justify-center relative space-y-3">
                        <h4 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] z-10 drop-shadow-[0_1px_5px_rgba(196,169,98,0.2)]">響き</h4>
                        <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.2em]">
                          すべての源 はじまりの音
                        </p>
                    </div>
                    
                    {/* Shijaku / Toumei */}
                    <div className="group flex flex-col items-center justify-center relative space-y-3">
                        <h4 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] z-10 drop-shadow-[0_1px_5px_rgba(196,169,98,0.2)]">静寂・透明</h4>
                        <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.2em]">
                          思考が透きとおる 深淵な安らぎ
                        </p>
                    </div>
                    
                    {/* Mujoken no Ai */}
                    <div className="group flex flex-col items-center justify-center relative space-y-3">
                        <h4 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] z-10 drop-shadow-[0_1px_5px_rgba(196,169,98,0.2)]">無条件の愛</h4>
                        <p className="font-serif text-[13px] md:text-[15px] text-zinc-700 leading-loose tracking-[0.2em]">
                          ただ在る それだけで満ちる
                        </p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Retreat Section */}
              <section id="retreat" className="scroll-mt-24 mb-20 md:mb-0 max-w-xl mx-auto text-center relative overflow-hidden">
                  <div className="space-y-8 relative z-10 pt-0 md:pt-20">
                    <div className="relative inline-block pb-6">
                      <h3 className="serif text-xl md:text-2xl text-zinc-800 tracking-[0.25em] drop-shadow-[0_2px_8px_rgba(196,169,98,0.2)] border-b border-[#C4A962] pb-2 inline-block">
                        おしゃべりリトリート
                      </h3>
                    </div>
                    
                    <div className="relative py-10 px-4">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 opacity-100 md:opacity-80 pointer-events-none">
                        <svg viewBox="56 56 88 88" className="w-full h-full animate-[spin_80s_linear_infinite]">
                          <defs>
                            <linearGradient id="retreatLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#C4A962" stopOpacity="0.4" />
                              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#C4A962" stopOpacity="0.4" />
                            </linearGradient>
                            <path id="retreat-lotus-petal" d="M 0 0 Q 5 -20 0 -40 Q -5 -20 0 0" fill="none" stroke="url(#retreatLotusGrad)" strokeWidth="0.15" />
                            <path id="retreat-lotus-petal-inner" d="M 0 0 Q 3 -15 0 -30 Q -3 -15 0 0" fill="none" stroke="url(#retreatLotusGrad)" strokeWidth="0.15" />
                          </defs>
                          <g transform="translate(100,100)">
                              {[...Array(12)].map((_, i) => (
                                <use key={`outer-${i}`} href="#retreat-lotus-petal" transform={`rotate(${i * 30})`} />
                              ))}
                              {[...Array(8)].map((_, i) => (
                                <use key={`inner-${i}`} href="#retreat-lotus-petal-inner" transform={`rotate(${i * 45 + 22.5})`} />
                              ))}
                              <circle cx="0" cy="0" r="3" fill="none" stroke="url(#retreatLotusGrad)" strokeWidth="0.15" />
                              <circle cx="0" cy="0" r="6" fill="none" stroke="url(#retreatLotusGrad)" strokeWidth="0.15" />
                          </g>
                        </svg>
                      </div>

                      <div className="p-8 md:p-0 rounded-3xl relative z-10">
                        <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
                          話すことを入り口に <br/>
                          今ここ <br/>
                          あるがままのわたしへ還る時間 <br/>
                          <br/>
                          うまく話さなくていい <br/>
                          沈黙もそのまま <br/>
                          <br/>
                          言葉より前の <br/>
                          響きへ 静けさへ還ってゆく
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-center">
                      <button 
                        onClick={() => handleNavigate('#retreat-detail')}
                        className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-widest text-[#C4A962] hover:text-[#A88E4D] transition-colors group"
                      >
                        <span className="border-b border-[#C4A962]/60 group-hover:border-[#C4A962] pb-0.5 transition-all">詳細へ</span>
                        <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
              </section>

              {/* Vertical Connecting Line */}
              <div className="flex justify-center mb-20 md:mb-40 pt-0 md:pt-8">
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-[#C4A962]/30 to-transparent" />
              </div>

              {/* Munay-Ki Section */}
              <section id="munayki" className="scroll-mt-24 mb-20 md:mb-40 max-w-xl mx-auto text-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 opacity-100 md:opacity-80 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_80s_linear_infinite]">
                      <defs>
                        <linearGradient id="chakanaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <g transform="translate(100,100)">
                          {[...Array(20)].map((_, i) => {
                            const size = 10 + i * 5;
                            const step = size / 3;
                            return (
                              <path 
                                key={i}
                                d={`M -${step} -${size} H ${step} V -${step} H ${size} V ${step} H ${step} V ${size} H -${step} V ${step} H -${size} V -${step} H -${step} V -${size} Z`}
                                fill="none" 
                                stroke="url(#chakanaGrad)" 
                                strokeWidth={0.4}
                              />
                            )
                          })}
                          <rect x="-2" y="-2" width="4" height="4" fill="url(#chakanaGrad)" opacity="0.5" transform="rotate(45)" />
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-8 relative z-10 px-4">
                    <div className="relative inline-block pb-6">
                      <h3 className="serif text-xl md:text-2xl text-zinc-800 tracking-[0.25em] drop-shadow-[0_2px_8px_rgba(196,169,98,0.2)] border-b border-[#C4A962] pb-2 inline-block">
                        ムナイキ
                      </h3>
                    </div>

                    <div className="p-8 md:p-0 rounded-3xl">
                      <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
                        古代インカ／アンデスに伝わる<br/>
                        シャーマンの儀礼<br/>
                        <br/>
                        山も 風も 星も 人も<br/>
                        すべては<br/>
                        いのちの連なりの中に在る祈り<br/>
                        存在としてのギフトです
                      </p>
                    </div>
                    <div className="pt-4 flex justify-center">
                      <button 
                        onClick={() => handleNavigate('#munayki-detail')}
                        className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-widest text-[#C4A962] hover:text-[#A88E4D] transition-colors group"
                      >
                        <span className="border-b border-[#C4A962]/60 group-hover:border-[#C4A962] pb-0.5 transition-all">詳細へ</span>
                        <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
              </section>

              {/* Synergy Message */}
              <section className="mb-20 md:mb-40 py-8 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 opacity-100 md:opacity-80 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                      <defs>
                        <linearGradient id="synergyYinYangGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <g transform="translate(100,100)">
                          {[...Array(20)].map((_, i) => {
                            const r = 10 + i * 5;
                            return (
                              <path 
                                key={i}
                                d={`M 0 -${r} A ${r/2} ${r/2} 0 0 1 0 0 A ${r/2} ${r/2} 0 0 0 0 ${r} A ${r} ${r} 0 1 1 0 -${r}`}
                                fill="none"
                                stroke="url(#synergyYinYangGrad)"
                                strokeWidth={0.4}
                                transform={`rotate(${i * 5})`}
                              />
                            )
                          })}
                      </g>
                    </svg>
                  </div>

                  <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10 px-6">
                    <div className="relative inline-block pb-6">
                      <h3 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.2em] font-medium drop-shadow-[0_2px_8px_rgba(196,169,98,0.2)] border-b border-[#C4A962] pb-2 inline-block">
                        <span className="font-medium text-zinc-800">おしゃべりリトリート/ムナイキ</span>
                      </h3>
                    </div>
                    <div className="p-8 md:p-0 rounded-3xl">
                      <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em] animate-[fadeIn_3s_ease-out]">
                          どちらも<br/>
                          「本質のわたしへ還る」確かなプロセス<br/>
                          <br/>
                          どちらを選んでも<br/>
                          不足や不安を埋める生き方から<br/>
                          無条件の愛へ<br/>
                          「在る」へひらかれてゆきます
                      </p>
                    </div>
                  </div>
              </section>
              
              {/* Profile Section */}
              <section id="profile" className="scroll-mt-24 mb-20 md:mb-40 max-w-2xl mx-auto text-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 opacity-100 md:opacity-80 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-float-slow">
                      <defs>
                        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>
                      <g transform="translate(100,100) scale(0.6)">
                          {[...Array(10)].map((_, i) => {
                            const s = 1 + i * 0.1;
                            const nodes = [
                              [0, -140], [40, -110], [-40, -110], 
                              [40, -40], [-40, -40], [0, -75], 
                              [40, 30], [-40, 30], [0, 60], 
                              [0, 130] 
                            ];
                            const paths = [
                              [0,1], [0,2], [1,2], 
                              [1,3], [2,4], [1,5], [2,5], [3,5], [4,5], [3,4], 
                              [3,6], [4,7], [5,6], [5,7], [6,7], [5,8], [6,8], [7,8], 
                              [8,9]
                            ];

                            return (
                              <g key={i} transform={`scale(${s})`} opacity={1 - i*0.08}>
                                {paths.map((p, idx) => (
                                  <line key={idx} x1={nodes[p[0]][0]} y1={nodes[p[0]][1]} x2={nodes[p[1]][0]} y2={nodes[p[1]][1]} stroke="url(#treeGrad)" strokeWidth={0.4} />
                                ))}
                                {nodes.map((n, idx) => (
                                  <circle key={idx} cx={n[0]} cy={n[1]} r={6} fill="none" stroke="url(#treeGrad)" strokeWidth={0.4} />
                                ))}
                              </g>
                            )
                          })}
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-8 relative z-10 px-4">
                    <div className="relative inline-block pb-6">
                      <h3 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] border-b border-[#C4A962] pb-2 inline-block">太田 慶子</h3>
                    </div>
                    
                    <div className="p-8 md:p-0 rounded-3xl">
                      <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
                        響きと在るを軸に活動してます<br/>
                        <br/>
                        幼いころから感じていた<br/>
                        世界の響き――<br/>
                        音や光 空気の揺らぎ<br/>
                        <br/>
                        一度閉じた感覚も<br/>
                        「今ここに在る」ときにもどり<br/>
                        存在で繋がる<br/>
                        静寂と安心が広がりました<br/>
                        <br/>
                        現在は響きの中で<br/>
                        ただ在る時間をひらいています
                      </p>
                    </div>
                    
                    <div className="pt-4 flex justify-center">
                      <a href="#profile-detail" onClick={(e) => { e.preventDefault(); handleNavigate('#profile-detail'); }} className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-widest text-[#C4A962] hover:text-[#A88E4D] transition-colors group">
                        <span className="border-b border-[#C4A962]/60 group-hover:border-[#C4A962] pb-0.5 transition-all">詳細へ</span>
                        <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24 mb-20 max-w-xl mx-auto text-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] -z-10 opacity-100 md:opacity-80 pointer-events-none">
                    <svg viewBox="56 56 88 88" className="w-full h-full animate-[spin_80s_linear_infinite]">
                      <defs>
                        <linearGradient id="contactLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#C4A962" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#C4A962" stopOpacity="0.4" />
                        </linearGradient>
                        <path id="contact-lotus-petal" d="M 0 0 Q 5 -20 0 -40 Q -5 -20 0 0" fill="none" stroke="url(#contactLotusGrad)" strokeWidth="0.15" />
                        <path id="contact-lotus-petal-inner" d="M 0 0 Q 3 -15 0 -30 Q -3 -15 0 0" fill="none" stroke="url(#contactLotusGrad)" strokeWidth="0.15" />
                      </defs>
                      <g transform="translate(100,100)">
                          {[...Array(12)].map((_, i) => (
                            <use key={`outer-${i}`} href="#retreat-lotus-petal" transform={`rotate(${i * 30})`} />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <use key={`inner-${i}`} href="#retreat-lotus-petal-inner" transform={`rotate(${i * 45 + 22.5})`} />
                          ))}
                          <circle cx="0" cy="0" r="3" fill="none" stroke="url(#contactLotusGrad)" strokeWidth="0.15" />
                          <circle cx="0" cy="0" r="6" fill="none" stroke="url(#contactLotusGrad)" strokeWidth="0.15" />
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-8 relative z-10 px-4">
                    <div className="relative inline-block pb-6">
                      <h3 className="serif text-lg md:text-xl text-zinc-800 tracking-[0.25em] border-b border-[#C4A962] pb-2 inline-block">ご予約・お問い合わせ</h3>
                    </div>
                    
                    <div className="p-8 md:p-0 rounded-3xl">
                      <p className="font-serif text-[13px] md:text-[15px] leading-loose text-zinc-700 tracking-[0.2em]">
                        InstagramのDM または 下記フォームより<br/>
                        お気軽にご連絡ください
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-4">
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
                  </div>
              </section>
            </main>

            <footer className="py-12 text-center bg-white relative z-10 border-t border-[#C4A962]/10">
              <p className="sacred-en text-[11px] text-zinc-500 tracking-[0.2em] opacity-60">
                &copy; 2026 toumeihibiki
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default App;