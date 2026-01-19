import { cn } from "@/lib/utils";
const Logo = ({ className }: { className: string }) => {
  return (
    <div className={cn("text-2xl font-bold", className)}>
      <img src={"/logo/logo.png"} alt="logo" className="w-26 object-contain" />
    </div>
  );
};

export default Logo;
