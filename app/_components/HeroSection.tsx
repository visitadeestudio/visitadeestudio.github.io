import AudioPlayer from "./AudioPlayer"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-5"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Visita de Estudio</h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            UNA PLATAFORMA DEDICADA A DIFUNDIR EL TRABAJO DE ARTISTAS MEXICANXS
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Conversaciones íntimas con artistas que están definiendo el panorama del arte contemporáneo en México.
          </p>

          <div className="flex justify-center">
            <AudioPlayer
              audioSrc="/Trailer_Temporada 1_Visita de estudio.mp3"
              title="Escucha nuestro trailer | Temporada 1"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-bold mb-2">Artistas Mexicanxs</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Conoce el trabajo y proceso creativo de artistas contemporáneos mexicanos.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-bold mb-2">Conversaciones</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Diálogos profundos sobre arte, creatividad y el panorama cultural actual.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-bold mb-2">Comunidad</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Forma parte de una comunidad que valora y difunde el arte mexicano.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
