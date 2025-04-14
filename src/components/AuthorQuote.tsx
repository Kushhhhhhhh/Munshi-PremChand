type AuthorQuoteProps = {
    quote: string;
  };
  
  export default function AuthorQuote({ quote }: AuthorQuoteProps) {
    return (
      <section className="py-10 bg-amber-100">
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-serif italic text-gray-800">
              "{quote}"
            </p>
            <footer className="mt-4 text-right text-gray-600">
              <cite>- मुंशी प्रेमचंद</cite>
            </footer>
          </blockquote>
        </div>
      </section>
    );
  }