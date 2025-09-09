import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen bg-[#f8f8f8] p-8">
      <Navbar />
      
      {/* Hero content area */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Hero Content Area
          </h1>
          <p className="text-xl text-gray-600 font-light">
            This is where your main hero content will go
          </p>
        </div>
      </div>
    </section>
  );
}