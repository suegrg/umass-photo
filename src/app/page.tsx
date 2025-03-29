import Navbar from "./components/navbar/navbar"; // Import Navbar
import Footer from "./components/footer/footer"; // Import Footer

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-8 sm:p-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Welcome to UMass Photo Club
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mb-8">
          Join us to explore the art of photography, participate in exciting
          events, and connect with fellow photography enthusiasts.
        </p>

        <div className="flex gap-4">
          <a
            href="/events"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            View Events
          </a>
          <a
            href="/gallery"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Explore Gallery
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
