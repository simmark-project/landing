"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const extensionUrl = "https://chromewebstore.google.com/detail/simmark-ai-%EB%B6%81%EB%A7%88%ED%81%AC-%EC%A0%95%EB%A6%AC/kmblaifgcnldcklbceioinenknioaaae?hl=ko&utm_source=landing_page&utm_medium=button&utm_campaign=simmark_launch";
  
  const expiryDate = new Date("2026-06-24T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiryDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft(prev => ({ ...prev, isExpired: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          isExpired: false
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center w-full">
        {images.map((num) => (
          <div key={num} className="w-full max-w-5xl relative">
            <img
              src={`/picture/${num}.png`}
              alt={`Concept ${num}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            
            {num === 1 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="mt-[20%] pointer-events-auto">
                  <a
                    href={extensionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
                  >
                    바로가기
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="w-full max-w-5xl relative">
          <div className="relative">
            <img
              src="/picture/10.png"
              alt="Expiration Promo"
              style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.5, filter: 'brightness(0.3)' }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
              <div className="mb-6">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">무료 사용 종료까지 남은 시간</h2>
              </div>

              {!timeLeft.isExpired ? (
                <div className="grid grid-cols-4 gap-3 md:gap-6 mb-10">
                  {[
                    { label: "일", value: timeLeft.days },
                    { label: "시", value: timeLeft.hours },
                    { label: "분", value: timeLeft.minutes },
                    { label: "초", value: timeLeft.seconds }
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-md px-4 py-3 md:px-8 md:py-6 rounded-2xl border border-white/20">
                      <div className="text-2xl md:text-5xl font-black">{String(item.value).padStart(2, '0')}</div>
                      <div className="text-[10px] md:text-xs font-bold opacity-60 uppercase mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-red-500 font-bold text-2xl mb-10">무료 사용 기간이 종료되었습니다.</div>
              )}

              <a
                href={extensionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 md:px-16 md:py-6 rounded-2xl font-black text-xl md:text-3xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                무료로 사용하기
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
