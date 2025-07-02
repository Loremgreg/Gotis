import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:justify-between items-start text-center md:text-left gap-16 md:gap-24">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex flex-col items-center text-center">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center items-center"
            >
              <Image
                src={logo}
                alt={`Gotis logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                Gotis
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              Your AI Partner
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-start text-center gap-16 md:gap-24">
            <div className="w-auto px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm text-center mb-3">
                CONTACT
              </div>

              <div className="flex flex-col justify-center items-center gap-2 mb-10 text-sm">
                <p>Am Mosl 29</p>
                <p>Murnau, 82418</p>
                <p>hello@gotis.cc</p>
              </div>
            </div>

            <div className="w-auto px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm text-center mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
