import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-bold">Events Page</h1>
      </main>
      <Footer />
    </div>
  );
}
