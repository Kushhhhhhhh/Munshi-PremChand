import Image from 'next/image';
import Link from 'next/link';

type Book = {
  id: string;
  title: string;
  coverImage: string;
  summary: string;
  year: string;
};

type BookshelfPreviewProps = {
  books: Book[];
};

export default function BookshelfPreview({ books }: BookshelfPreviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Link href={`/books/${book.id}`} key={book.id} className="block">
          <div className="flex flex-col h-full border-4 border-black bg-white hover:shadow-brutal transition-shadow">
            <div className="relative h-64 border-b-4 border-black">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{book.year}</p>
              <p className="text-gray-700 flex-grow">{book.summary}</p>
              <div className="mt-4 text-right">
                <span className="inline-block px-4 py-2 bg-olive-600 text-white font-bold border-2 border-black">
                  पढ़ें
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}