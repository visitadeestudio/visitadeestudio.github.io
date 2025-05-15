import AudioPlayer from "./AudioPlayer"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="pt-6 text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            P r o x i m a m e n t e . . .
          </p>
          <div className="pt-6 flex justify-center">
            <AudioPlayer
              audioSrc="/Trailer_Temporada 1_Visita de estudio.mp3"
              title="Trailer | Temporada 1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
