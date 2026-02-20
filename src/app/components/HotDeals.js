"use client";
import React, { useRef, useEffect } from 'react';

const HotDeals = () => {
  const scrollRef = useRef(null);
  
  const cards = [
    { id: 1, title: "Samsung Galaxy S24 Ultra", img:"/samsung.avif" },
    { id: 2, title: "IPhone", img:"/samsung.avif" },
    { id: 3, title: "Infinix", img:"/samsung.avif" },
    { id: 4, title: "Samsung Galaxy S24 Ultra", img:"/samsung.avif" },
    { id: 5, title: "IPhone", img:"/samsung.avif" },
    { id: 6, title: "Infinix", img:"/samsung.avif" },
  ];

  const scrollOneCard = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Get the width of the first card element
      const cardWidth = container.firstElementChild.clientWidth;
      const gap = 16; // This matches the 'gap-4' (4 * 4px) in Tailwind
      
      const scrollAmount = direction === 'left' 
        ? -(cardWidth + gap) 
        : (cardWidth + gap);

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-slide logic: one card at a time
  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstElementChild.clientWidth + 16;

        // Reset to start if we reach the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-20 group">
        <div><h1 className="text-4xl font-bold mb-10">Hot Deals</h1></div>
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card) => (
          <div 
            key={card.id} 
            // 4 cards per row logic: (100% / 4) - (adjusting for gaps)
            className="flex-shrink-0 snap-start px-8 flex flex-col border border-1 rounded-md py-4 "
          >
            <div className={`  rounded-2xl flex items-center justify-center text-white text-xl font-bold `}>
              <img src={card.img} alt={card.title} className="w-40 h-40 object-contain rounded-2xl" />
            </div>
            <div> </div>
            <div className='mb-4 mt-4'>
                <button className='text-[#3BB640] bg-[#ECFAF0] px-0.5 py-0.5'>₹33,460 OFF</button>
                <h1 className="text-left font-bold text-md">{card.title}</h1>
            </div>

            <div className='flex gap-1 '>
                <button className='rounded-xs px-0.5 py-0.5 bg-[#1D3D93] text-white text-sm'>Flash Sale</button>
                <span className='border border-1 px-1 py-0.5 text-sm'>4.3</span>
            </div>

            <div className='flex text-left items-center justify-start gap-2 py-3'>
                <span className='text-[#FE6461] text-xl'>-62%</span>
                <span className='text-md font-semibold'>₹ 33,460</span>
                <span className='line-through text-gray-500 text-sm'>₹ 88,834</span>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Navigation */}
      <button onClick={() => scrollOneCard('left')} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
        ←
      </button>
      <button onClick={() => scrollOneCard('right')} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
        →
      </button>
    </div>
  );
};

export default HotDeals;