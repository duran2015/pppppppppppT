import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { slides } from '../slides';

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const TARGET_WIDTH = 1024;
  const TARGET_HEIGHT = 768;

  // Handle scaling to fit window
  useEffect(() => {
    function handleResize() {
      // Sidebar is 256px on md+
      const sidebarWidth = window.innerWidth >= 768 ? 256 : 0;
      const windowWidth = window.innerWidth - sidebarWidth;
      const windowHeight = window.innerHeight;
      
      const padding = windowWidth < 768 ? 0.98 : 0.95;
      
      const scaleX = windowWidth / TARGET_WIDTH;
      const scaleY = windowHeight / TARGET_HEIGHT;
      
      setScale(Math.min(scaleX, scaleY) * padding);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-slate-900 text-slate-100 font-sans flex overflow-hidden">
      
      <aside className="hidden md:flex w-64 bg-slate-950 border-r border-slate-800 flex-col z-20 shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800/50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/20">Z</div>
          <span className="text-xl font-bold tracking-tight">Zerone <span className="text-blue-500 underline underline-offset-4 decoration-2">Pro</span></span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest px-2 mb-4">Presentation Index</div>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-full text-left p-3 rounded text-sm transition-colors ${
                idx === currentSlide 
                  ? 'bg-slate-800 border-l-4 border-blue-500 font-bold text-blue-400' 
                  : 'hover:bg-slate-900 text-slate-400 border-l-4 border-transparent'
              }`}
            >
              {String(idx + 1).padStart(2, '0')} 幻灯片 {idx + 1}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500">
          <span>Current Version: 2.0.4 - Medical Grade AI</span>
        </div>
      </aside>

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-slate-900">
        <div 
          style={{ 
            width: TARGET_WIDTH, 
            height: TARGET_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
          className="relative bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-slate-800 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800/80 text-white rounded-full transition-colors backdrop-blur-md border border-slate-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800/80 text-white rounded-full transition-colors backdrop-blur-md border border-slate-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-8 bg-slate-700 mx-1"></div>

          <button 
            onClick={toggleFullScreen}
            className="p-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors backdrop-blur-md border border-slate-700"
            title="Toggle Fullscreen"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
