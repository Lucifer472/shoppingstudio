"use client";
import { category, footerLink, url } from "@/constant";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={cn("w-full bg-black mb-[80px] sm:mb-0")}>
      <div className="global-container flex flex-col text-white p-8">
        <div className="flex items-start justify-between flex-wrap gap-6 py-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className="text-sm sm:text-base md:text-lg py-2 border-b border-white font-medium">
              Category
            </h2>
            {category.map((l) => (
              <Link
                key={l.link}
                href={`${l.link}`}
                className="text-xs sm:text-sm md:text-base font-light text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className="text-sm sm:text-base md:text-lg py-2 border-b border-white font-medium">
              Website
            </h2>
            {footerLink.map((l) => (
              <Link
                key={l.link}
                href={`${l.link}`}
                className="text-xs sm:text-sm md:text-base font-light text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className="text-sm sm:text-base md:text-lg py-2 border-b border-white font-medium">
              Social Links
            </h2>
            <div className="flex items-center justify-center gap-4">
              <Link href={"/"}>
                <Image
                  src="/asset/social/facebook.svg"
                  width={40}
                  height={40}
                  alt="Facebook"
                  className="w-8 sm:w-10"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/asset/social/inst.svg"
                  width={40}
                  height={40}
                  alt="instagaram"
                  className="w-8 sm:w-10"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/asset/social/link.svg"
                  width={40}
                  height={40}
                  alt="Linkeid"
                  className="w-8 sm:w-10"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/asset/social/x.svg"
                  width={40}
                  height={40}
                  alt="Twitter"
                  className="w-8 sm:w-10"
                />
              </Link>
            </div>
            <h2 className="text-sm sm:text-base md:text-lg py-2 border-b border-white font-medium">
              Contact Info
            </h2>
            <div className="flex flex-col items-start justify-start gap-2">
              <Link href={"/"} className="flex items-center gap-2">
                <Mail className="w-4 h-full sm:w-6 md:w-8" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light">
                  info@{`${url.slice(8, 25)}`}
                </span>
              </Link>
              <Link href={"/"} className="flex items-center gap-2">
                <MapPin className="w-5 sm:w-6 md:w-8 h-full " />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light">
                  12, Old City, Kalupur, Ahmedabad, Gujarat 380001
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-4 w-full border-t border-white">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">
            All Right Reserved &copy; {`${url.slice(8, 25)}`}. Manage By Truepub
            Media Private Limited.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
