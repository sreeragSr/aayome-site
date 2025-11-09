import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-neutral-900 text-white py-20 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 animate-fadeIn">
          AAYOMÉ
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 animate-fadeIn delay-200">
          Architecture • Interior • Construction
        </p>
        <p className="mt-6 text-gray-400 animate-fadeIn delay-400">
          Bringing your visions to life, one space at a time.
        </p>
      </header>

      {/* Portfolio / Projects Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 1"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Project 1</h3>
              <p className="text-gray-700 text-sm">
                Modern architecture design with sustainable materials.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 2"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Project 2</h3>
              <p className="text-gray-700 text-sm">
                Contemporary interior design blending style and function.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 3"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Project 3</h3>
              <p className="text-gray-700 text-sm">
                Construction solutions with modern architecture integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">About AAYOMÉ</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          AAYOMÉ is a full-service architecture, interior design, and construction solutions company dedicated to creating spaces that inspire. Our team blends creativity, functionality, and sustainability to deliver projects that exceed expectations.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          Email us at{" "}
          <a
            href="mailto:info@aayome.in"
            className="text-neutral-900 font-semibold underline"
          >
            info@aayome.in
          </a>
        </p>
        <p className="text-gray-500">
          We’d love to hear from you! Whether it’s a project inquiry or a general question, reach out and we’ll get back to you promptly.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} AAYOMÉ. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
