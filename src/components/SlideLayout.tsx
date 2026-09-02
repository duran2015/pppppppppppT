import { ReactNode } from 'react';

interface SlideLayoutProps {
  header?: string;
  title?: ReactNode;
  children: ReactNode;
  conclusion?: ReactNode;
}

export function SlideLayout({ header, title, children, conclusion }: SlideLayoutProps) {
  return (
    <div className="w-full h-full bg-slate-900 flex flex-col p-12 text-slate-100 overflow-hidden relative">
      {/* Header */}
      {header && (
        <div className="flex items-center space-x-3 mb-6 shrink-0">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400">{header}</h2>
        </div>
      )}

      {/* Title */}
      {title && (
        <h1 className="text-3xl font-bold text-white mb-8 leading-tight shrink-0">
          {title}
        </h1>
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
        {children}
      </div>

      {/* Conclusion */}
      {conclusion && (
        <div className="mt-8 bg-slate-800/50 border-l-4 border-blue-500 p-5 rounded-r-xl shrink-0">
          <p className="text-sm text-slate-300 font-medium flex items-start leading-relaxed">
            <span className="text-blue-500 mr-3 text-lg leading-none mt-0.5">✦</span>
            <span>{conclusion}</span>
          </p>
        </div>
      )}
    </div>
  );
}
