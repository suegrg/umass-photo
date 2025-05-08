"use client";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#8E122A] text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join us for exciting photography events, workshops, and
              exhibitions
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              {/* Image Block - Left */}
              <div className="w-2/5 h-64 bg-gray-200 flex-shrink-0"></div>

              {/* Text Content - Right */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3 text-black">
                  Spring Photography Workshop
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                  April 15, 2023 | 2:00 PM
                </p>
                <p className="mb-6 text-gray-700">
                  Learn advanced techniques from professional photographers in
                  this hands-on workshop. Perfect for intermediate to advanced
                  photographers looking to refine their skills.
                </p>
                <button className="bg-[#8E122A] text-white px-6 py-2 rounded-md hover:bg-[#6A0D20] transition w-fit">
                  Register Now
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              {/* Image Block - Left */}
              <div className="w-2/5 h-64 bg-gray-200 flex-shrink-0"></div>

              {/* Text Content - Right */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3 text-black">
                  Annual Photo Exhibition
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                  May 5-7, 2023 | All Day
                </p>
                <p className="mb-6 text-gray-700">
                  Showcase your work at our biggest exhibition of the year
                  featuring over 100 photographers. Network with industry
                  professionals and photography enthusiasts.
                </p>
                <button className="bg-[#8E122A] text-white px-6 py-2 rounded-md hover:bg-[#6A0D20] transition w-fit">
                  Learn More
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              {/* Image Block - Left */}
              <div className="w-2/5 h-64 bg-gray-200 flex-shrink-0"></div>

              {/* Text Content - Right */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3 text-black">
                  Summer Photo Walk
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                  June 10, 2023 | 9:00 AM
                </p>
                <p className="mb-6 text-gray-700">
                  Explore the city's hidden gems with fellow photography
                  enthusiasts. Guided tour through scenic locations perfect for
                  urban and landscape photography.
                </p>
                <button className="bg-[#8E122A] text-white px-6 py-2 rounded-md hover:bg-[#6A0D20] transition w-fit">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#8E122A] text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have an event idea?</h2>
            <button className="bg-white text-[#8E122A] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Suggest an Event
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
