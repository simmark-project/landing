import Image from "next/image";

export default function Home() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const extensionUrl = "https://chromewebstore.google.com/detail/simmark-ai-%EB%B6%81%EB%A7%88%ED%81%AC-%EC%A0%95%EB%A6%AC/kmblaifgcnldcklbceioinenknioaaae?hl=ko";

  return (
    <div className="min-h-screen bg-white">
      {/* Image Stream */}
      <main className="flex flex-col items-center">
        {images.map((num) => (
          <div key={num} className="w-full max-w-5xl relative">
            <img
              src={`/picture/${num}.png`}
              alt={`Concept ${num}`}
              className="w-full h-auto block"
              loading={num > 2 ? "lazy" : "eager"}
            />
            
            {/* Shortcut Button overlaid on the first image */}
            {num === 1 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="mt-[20%] pointer-events-auto"> {/* Adjust mt-% to align with your image design */}
                  <a
                    href={extensionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
                  >
                    바로가기
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Simple Footer */}
      <footer className="py-20 text-center text-gray-400 text-xs border-t border-gray-50">
        <p>© 2026 SIMMARK. All rights reserved.</p>
      </footer>
    </div>
  );
}
