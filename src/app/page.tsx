import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[50rem] flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mt-12 px-6 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center">
        <div className="relative w-64 h-96 transform -rotate-6 hover:rotate-[-4deg] transition border-4 border-gray-300 rounded-lg overflow-hidden">
          <Image
            src="/static/images/TJ_Formal.JPG"
            alt="Tanuj Chakraborty"
            fill
            className="object-cover rounded-sm"
            quality={50}
            priority
          />
        </div>
      </div>
      <br />
      <br />
      
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <p className="text-2xl md:text-4xl font-bold mb-2">Hey, I&apos;m Tanuj 👋</p>
        <p className="text-sm md:text-lg font-bold mb-2">Software Developer based out of India 🇮🇳 </p>
        <p className="text-sm md:text-lg mb-1">Writing code that turns ideas into impact 🌟</p>
        <p className="text-sm md:text-lg">Glad you stopped by 😊</p>
      </div>
    </div>
  );
}
