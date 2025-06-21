import Image from 'next/image';
import Link from 'next/link';

import FeaturedStories from "@/components/FeaturedStories"
import AuthorQuote from "@/components/AuthorQuote"
import BookshelfPreview from "@/components/BookshelfPreview"

export default async function Home() {

  const featuredBooks = await getFeaturedBooks();
  const authorQuote = await getRandomAuthorQuote();

  return (
    <main className="min-h-screen bg-amber-50">
   
      <section className="relative border-b-4 border-black">
        <div className="absolute inset-0 bg-olive-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                मुंशी प्रेमचंद
              </h1>
              <p className="text-xl md:text-2xl text-gray-800">
                साहित्य की दुनिया के महान कथाकार
              </p>
              <p className="text-base md:text-lg text-gray-700">
                उपन्यास एवं कहानियों का अनमोल संग्रह
              </p>
              <div className="pt-4 z-50">
                <Link 
                  href="/books" 
                  className="px-8 py-4 bg-black text-white font-bold text-lg border-2 border-black hover:cursor-pointer"
                >
                  पुस्तकें देखें
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 border-4 border-black shadow-brutal">
              <Image
                src="/munshi-premchand.png"
                alt="मुंशी प्रेमचंद"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <AuthorQuote quote={authorQuote} />

      <section className="py-16 bg-olive-100 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-black pb-2">
            प्रमुख रचनाएँ
          </h2>
          <BookshelfPreview books={featuredBooks} />
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-black pb-2">
            प्रसिद्ध कहानियाँ
          </h2>
          <FeaturedStories />
        </div>
      </section>

      <section className="py-16 bg-olive-200 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-black pb-2">
                प्रेमचंद के बारे में
              </h2>
              <p className="text-lg">
                मुंशी प्रेमचंद, जिनका वास्तविक नाम धनपत राय श्रीवास्तव था, हिंदी और उर्दू साहित्य के महानतम लेखकों में से एक हैं। उन्होंने अपनी लेखनी से भारतीय समाज की वास्तविकताओं को चित्रित किया।
              </p>
              <p className="text-lg">
                उनके साहित्य में ग्रामीण भारत, सामाजिक विषमता, शोषण और मानवीय संघर्ष के चित्रण मिलते हैं।
              </p>
              <Link 
                href="/about" 
                className="px-6 py-3 mt-4 bg-black text-amber-50 font-bold border-2 border-black transition-colors duration-300"
              >
                और जानें
              </Link>
            </div>
            <div className="relative h-64 md:h-auto border-4 border-black shadow-brutal">
              <Image
                src="/premchand-1.jpeg"
                alt="प्रेमचंद लिखते हुए"
                fill
                sizes="(max-width: 786px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

async function getFeaturedBooks() {
  return [
    {
      id: 'godan',
      title: 'गोदान',
      coverImage: '/godan.jpeg',
      summary: 'एक किसान होरी की दर्दनाक कहानी।',
      year: '1936'
    },
    {
      id: 'kafan',
      title: 'कफ़न',
      coverImage: '/kafan.jpeg',
      summary: 'गरीबी और संवेदनहीनता का मार्मिक चित्रण।',
      year: '1936'
    },
    {
      id: 'nirmala',
      title: 'निर्मला',
      coverImage: '/nirmala.jpeg',
      summary: 'अनमेल विवाह की समस्या पर आधारित उपन्यास।',
      year: '1925'
    },
    {
      id: 'premashram',
      title: 'प्रेमाश्रम',
      coverImage: '/premashram.jpeg',
      summary: 'सामाजिक और राजनीतिक परिवर्तन की कहानी।',
      year: '1922'
    }
  ];
}

async function getRandomAuthorQuote() {
  const quotes = [
    "साहित्य के चट्टान से टकराकर निकला हुआ वह झरना है, जिसमें भावना की मादकता और विचारों का ओज और भाषा की मिठास होती है।",
    "साहित्य उस शराब के समान है जो पीने वाले को नशा करती है और देखने वाले को भी।",
    "जीवन में जिस चीज़ का आदर है, वह है सादगी और सत्यता।"
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
}