import AudioPlayer from "./AudioPlayer"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8">
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        P r o x i m a m e n t e . . .
      </p>
      <div className="flex justify-center">
        <AudioPlayer
          audioSrc="/Trailer_Temporada 1_Visita de estudio.mp3"
          title="Trailer | Temporada 1"
        />
      </div>
    </section>
  )
}
