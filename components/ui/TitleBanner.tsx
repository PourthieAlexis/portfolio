import React from "react";

interface TitleBannerProps {
  text: string;
}

export default function TitleBanner({ text }: TitleBannerProps) {
  return (
    <div className="relative h-32 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 gap-px">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-t border-white/20" />
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl transform translate-y-1/2" />
      </div>

      <div className="relative flex items-center justify-center w-full max-w-4xl px-4">
        <div className="w-1/5 h-px bg-gradient-to-r from-transparent via-white to-white transform transition-transform duration-700 hover:scale-x-110" />

        <h2 className="relative mx-3 md:mx-8 text-xl md:text-4xl font-bold tracking-wider">
          <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {text}
          </span>
        </h2>

        <div className="w-1/5 h-px bg-gradient-to-r from-white to-transparent transform transition-transform duration-700 hover:scale-x-110" />
      </div>

      <div className="absolute left-0 top-1/2 h-12 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -translate-y-1/2 opacity-50" />

      <div className="absolute right-0 top-1/2 h-12 w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-y-1/2 opacity-50" />
    </div>
  );
}
