import { MapPin, Clock, ParkingCircle, Phone } from "lucide-react";

const Map = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Map – Left */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5558611629613!2d55.234511499999996!3d25.1168916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6994feb5fdf1%3A0x885a3f7b670c18ef!2sAdvanz%20Tech!5e0!3m2!1sen!2sin!4v1768467637439!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Munich Motor Works Location"
          />
        </div>

        {/* Text – Right */}
        <div className="space-y-5 lg:space-y-3">
          <h1 className="text-4xl md:text-5xl font-domine font-semibold text-gray-900">
            Our Location
          </h1>

          <p className="text-lg text-gray-700 font-inter max-w-md">
            Premium car repair services at Munich Motor Works, Dubai
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-800 font-medium">
                Advanz Tech, Dubai
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-800 font-medium">
                Open 6 Days a Week (Sat–Thu)
              </span>
            </div>
            <div className="flex items-start gap-3">
              <ParkingCircle
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-800 font-medium">
                Easy Access & Dedicated Parking
              </span>
            </div>
          </div>

          <button className="px-4 py-2 w-full lg:w-auto bg-yellow-500 hover:bg-yellow-600 border flex transition-colors duration-300 items-center text-slate-50 rounded">
            <Phone size={20} stroke="white" />
            <span className="ml-2 font-inter font-semibold tracking-tighter ">
              Call Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Map;
