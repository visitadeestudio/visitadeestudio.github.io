import HeroSection from "./_components/HeroSection"
import Footer from "./_components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen md:min-h-screen flex flex-col items-center justify-center text-center px-4 font-[family-name:var(--font-geist-sans)]">
      <HeroSection />
      <Footer />
    </div>
  )
}
