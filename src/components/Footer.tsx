import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-800 text-amber-50 border-t-4 border-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 border-b border-amber-50 pb-2">
              प्रेमचंद साहित्य
            </h3>
            <p className="mb-4">
              मुंशी प्रेमचंद की अमर रचनाओं को पढ़ने और जानने के लिए एक समर्पित मंच।
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 border-b border-amber-50 pb-2">
              महत्वपूर्ण लिंक
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="hover:underline">पुस्तकें</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">प्रेमचंद के बारे में</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 border-b border-amber-50 pb-2">
              हमारे बारे में
            </h3>
            <p className="mb-4">
              यह एप्लिकेशन मुंशी प्रेमचंद के साहित्य को नई पीढ़ी तक पहुंचाने के लिए बनाया गया है।
              यहाँ प्रेमचंद जी की सभी प्रमुख रचनाएँ हिंदी में पढ़ सकते हैं।
            </p>
            <p className="mb-4">
              मेरा नाम <strong>कुश</strong> है, और मुझे वेब एप्लिकेशन बनाना बहुत पसंद है। मैं
              <strong> क्रिएटिव डिज़ाइन</strong> और <strong>यूज़र अनुभव</strong> पर विशेष ध्यान देता हूँ।
              यह प्रोजेक्ट मेरी रुचि और हिंदी साहित्य के प्रति मेरे प्रेम का एक अद्भुत संगम है।
            </p>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-amber-50/30 text-center">
          <p>© {currentYear} मुंशी प्रेमचंद साहित्य संग्रह। सर्वाधिकार सुरक्षित हैं।</p>
        </div>
      </div>
    </footer>
  );
}