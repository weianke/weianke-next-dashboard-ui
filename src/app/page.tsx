import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-center gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block">SchooLama</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        <h1 className="text-3xl font-bold text-center p-4">
          welcome to dashboard
        </h1>
      </div>
    </div>
  );
}
