import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-24 bg-amber-50 min-h-[80vh]">
      <div className='max-w-7xl mx-auto space-y-12'>

      <PageHeader />

      <MainContent />

      <TimelineSection />

      <QuoteBlock
        quote="साहित्य का उद्देश्य केवल मनोरंजन नहीं, बल्कि मानव जीवन की समस्याओं को उजागर करना और जीवन की वास्तविकताओं को उतारना है।"
        author="मुंशी प्रेमचंद"
      />

      <CallToAction />
      </div>
      
    </section>
  );
};

export default About;

const PageHeader = () => (
  <div className="border-4 border-black p-4 shadow-brutal bg-olive-100">
    <h1 className="text-4xl md:text-5xl font-serif font-bold border-b-4 border-black inline-block pb-2">
      प्रेमचंद के बारे में
    </h1>
  </div>
);

const MainContent = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="border-4 border-black shadow-brutal bg-olive-200 p-4 flex-1 flex items-center justify-center">
      <Image
        src="/munshi-premchand.png"
        alt="Munshi Premchand"
        width={400}
        height={400}
        className="object-contain"
      />
    </div>

    <div className="border-4 border-black shadow-brutal bg-olive-100 p-6 flex-1 flex flex-col justify-center">
      <p className="text-lg leading-8 mb-4">
        <span className="font-bold">मुंशी प्रेमचंद</span> हिंदी और उर्दू साहित्य के सबसे महान लेखकों में से एक थे। उन्होंने भारतीय समाज की समस्याओं, ग्रामीण जीवन, गरीबी, शोषण, और मानवीय संघर्षों को अपनी रचनाओं में बखूबी चित्रित किया।
      </p>
      <p className="text-lg leading-8">
        उनके साहित्य में सादगी, ईमानदारी और सामाजिक यथार्थ की झलक मिलती है। प्रेमचंद की रचनाएँ आज भी उतनी ही प्रासंगिक हैं जितनी उनके समय में थीं।
      </p>
    </div>
  </div>
);

const TimelineSection = () => (
  <div className="max-w-screen-xl mx-auto">
    <div className="bg-olive-600 border-4 border-black p-8 shadow-brutal">
      <h2 className="text-4xl font-serif text-amber-50 mb-8 border-b-4 border-amber-50 pb-2">
        महत्वपूर्ण घटनाएँ
      </h2>
      
      <div className="space-y-6 font-sans text-amber-50">
        {timelineData.map((event, index) => (
          <TimelineItem key={index} year={event.year} description={event.description} />
        ))}
      </div>
    </div>
  </div>
);

const timelineData = [
  { year: '1880', description: 'पैदाइश, लखनऊ में' },
  { year: '1900', description: 'पहली कहानी "धन की बुआई"' },
  { year: '1910', description: 'नाम परिवर्तन मुंशी प्रेमचंद्र से' },
  { year: '1921', description: 'साहित्य सेवा संघ की स्थापना' },
  { year: '1936', description: 'अंतिम सांस, इलाहाबाद में' },
];

const TimelineItem = ({ year, description }: { year: string; description: string }) => (
  <div className="border-l-4 border-amber-50 pl-4">
    <span className="font-bold">{year}</span> - {description}
  </div>
);

const QuoteBlock = ({ quote, author }: { quote: string; author: string }) => (
  <div className="max-w-screen-xl mx-auto">
    <div className="bg-olive-800 border-4 border-black p-8 shadow-brutal">
      <blockquote className="text-2xl font-serif italic text-amber-50 border-l-4 border-amber-50 pl-6">
        {quote}
      </blockquote>
      <div className="mt-6 text-right text-amber-50 font-serif">– {author}</div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="max-w-screen-xl mx-auto text-center">
    <Link href="/books" className="btn-brutal inline-block">
      उनकी कृतियाँ पढ़ें
    </Link>
  </div>
);