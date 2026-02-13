import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { generateReflection } from '../services/geminiService';
import { LoadingState } from '../types';

export const Reflection: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    const result = await generateReflection(input);
    setResponse(result);
    setStatus(LoadingState.SUCCESS);
    setInput('');
  };

  return (
    <section id="reflection" className="py-40 px-6 bg-gradient-to-b from-transparent to-zinc-50/50">
      <div className="max-w-lg mx-auto text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl -z-10" />

        <div className="mb-10 flex justify-center text-zinc-300">
          <Sparkles strokeWidth={0.5} size={30} />
        </div>
        
        <h3 className="serif text-2xl mb-6 text-zinc-600 tracking-[0.2em]">内なる響きを聞く</h3>
        <p className="text-zinc-400 text-sm leading-8 mb-12 tracking-widest font-light">
          いま、心にある言葉をひとつ。<br/>
          静寂の中から、響きをお返しします。
        </p>

        {response && (
          <div className="mb-16 p-10 bg-white/60 border border-white shadow-sm rounded-sm animate-[fadeIn_1.5s_ease-out]">
            <p className="serif text-xl leading-loose text-zinc-700 whitespace-pre-line">
              {response}
            </p>
            <button 
              onClick={() => setResponse(null)}
              className="mt-8 text-xs text-zinc-400 hover:text-zinc-600 tracking-widest transition-all uppercase"
            >
              Close
            </button>
          </div>
        )}

        {!response && (
          <form onSubmit={handleSubmit} className="relative group max-w-sm mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="..."
              disabled={status === LoadingState.LOADING}
              className="w-full bg-transparent border-b border-zinc-200 py-3 px-4 text-center text-lg text-zinc-600 placeholder:text-zinc-200 focus:outline-none focus:border-zinc-400 transition-all duration-700 disabled:opacity-50 font-light tracking-wider"
            />
            <button 
              type="submit"
              disabled={status === LoadingState.LOADING || !input.trim()}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-zinc-300 hover:text-zinc-500 disabled:opacity-0 transition-all duration-500"
            >
              {status === LoadingState.LOADING ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send strokeWidth={1} size={20} />
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};