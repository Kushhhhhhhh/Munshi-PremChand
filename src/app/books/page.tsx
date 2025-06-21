import Image from 'next/image'
import Link from 'next/link'

const books = [
  {
    slug: 'godan',
    title: 'गोदान',
    cover: '/godan.jpeg',
    description: 'एक किसान की ज़िंदगी का संघर्षमय सफर, जो मानवता की गहरी कहानी है।',
  },
  {
    slug: 'idgah',
    title: 'इदगाह',
    cover: '/idgah.jpeg',
    description: 'ईद के दिन की एक सरल कहानी, बच्चे की मासूमियत का जज्बा।',
  },
  {
    slug: 'kafan',
    title: 'कफन',
    cover: '/kafan.jpeg',
    description: 'सामाजिक विडंबना पर आधारित एक भावुक कहानी।',
  },
  {
    slug: 'nirmala',
    title: 'निर्मल',
    cover: '/nirmala.jpeg',
    description: 'एक श्रद्धालु महिला की आध्यात्मिक यात्रा।',
  },
  {
    slug: 'panch-parmeshwar',
    title: 'पंच परमेश्वर',
    cover: '/panch-parmeshwar.jpeg',
    description: 'लोकायत न्याय और उसकी विडंबनाओं की कहानी।',
  },
  {
    slug: 'premashram',
    title: 'प्रेमाश्रम',
    cover: '/premashram.jpeg',
    description: 'प्रेम और समाज सुधार के विचारों पर आधारित उपन्यास।',
  },
  {
    slug: 'shatranj',
    title: 'शतरंज',
    cover: '/shatranj.jpeg',
    description: 'शतरंज के माध्यम से मानव मन की गहराइयाँ।',
  },
]

export default function Books() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 border-b-4 border-amber-50 pb-4">
        मुंशी प्रेमचंद की प्रमुख रचनाएँ
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.slug}
            className="bg-olive-100 p-4 shadow-brutal border-2 border-black flex flex-col"
          >
            <div className="relative w-full h-64 md:h-72 mb-4 overflow-hidden">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-serif mb-2">{book.title}</h2>
            <p className="text-sm md:text-base text-foreground mb-4 flex-grow">
              {book.description}
            </p>
            <Link href={`/books/${book.slug}`} className="btn-brutal self-start">
              अधिक पढ़ें
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}