import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedStories() {

  const featuredStories = [
    {
      id: 'panch-parmeshwar',
      title: 'पंच परमेश्वर',
      summary: 'दो दोस्तों के बीच झगड़े और न्याय की कहानी।',
      imageSrc: '/panch-parmeshwar.jpeg'
    },
    {
      id: 'idgah',
      title: 'ईदगाह',
      summary: 'एक बच्चे की परोपकारी भावना की हृदयस्पर्शी कहानी।',
      imageSrc: '/idgah.jpeg'
    },
    {
      id: 'shatranj',
      title: 'शतरंज के खिलाड़ी',
      summary: 'अवध के दो शौकीन नवाबों और अंग्रेजी राज की कहानी।',
      imageSrc: '/shatrang.jpeg'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredStories.map((story) => (
        <Link href={`/books/${story.id}`} key={story.id}>
          <div className="border-4 border-black bg-amber-100 h-full transition-transform hover:-translate-y-2 hover:shadow-brutal">
            <div className="relative h-48 border-b-4 border-black">
              <Image
                src={story.imageSrc}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}