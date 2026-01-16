import Image from "next/image";
import { Phone, Clock, BadgeCheck, ShieldCheck } from "lucide-react";
const CTA = () => {
  return (
    <section className="relative overflow-hidden mt-10 mb-16 px-5 lg:px-0">
      <div className="mx-auto max-w-5xl  text-center rounded-xl px-3 py-9 text-white bg-linear-to-br from-zinc-900 to-zinc-800">
        <h2 className="text-4xl font-domine font-bold tracking-tight">
          Ready to Service Your Car?
        </h2>

        <p className="mt-4 text-zinc-300 max-w-2xl font-inter mx-auto">
          Don’t wait for small issues to become costly repairs. Trust Advanz
          Tech for professional, transparent, and reliable car service in Dubai.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex gap-2 items-center justify-center rounded-xl bg-green-100 px-6 py-3 text-sm font-semibold text-black hover:bg-green-50 transition"
          >
            <Image
              src={"/icons/whatsapp.png"}
              alt={""}
              className=""
              width={20}
              height={20}
            />{" "}
            Book Service on WhatsApp
          </a>

          <a
            href="tel:+971"
            className="inline-flex gap-2 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            <Phone className="" width={20} height={20} /> Call Now: +971 4 370
            7996
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-200">
          <div className="flex items-center justify-center gap-2">
            <Clock /> <span>Same-Day Service</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <BadgeCheck />
            <span>Genuine Parts Only</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck /> <span>Service Warranty Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
