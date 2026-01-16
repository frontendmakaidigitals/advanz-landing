import Logo from "./Logo";
import Image from "next/image";
import { Phone } from "lucide-react";
const Header = () => {
  return (
    <div className="max-w-6xl mx-auto py-3 px-4 flex justify-between items-center  ">
      <Logo className="" />
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-[#25D366] flex items-center text-slate-50 rounded">
          <Image
            src={"/icons/whatsapp-dark-filled.png"}
            alt={""}
            className="invert brightness-0"
            width={20}
            height={20}
          />{" "}
          <span className="ml-2 hidden lg:block font-inter font-semibold tracking-tighter text-slate-50">
            +971 56 993 9879
          </span>
        </button>
        <button className="px-4 py-2 bg-yellow-500 flex items-center text-slate-50 rounded">
          <Phone size={20} stroke="white" />
          <span className="ml-2 hidden lg:block font-inter font-semibold tracking-tighter ">
            +971 56 993 9879
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
