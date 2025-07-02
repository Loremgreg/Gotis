import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section id="cta" className="relative hero overflow-hidden min-h-screen">
      <div className="relative hero-overlay bg-neutral bg-opacity-90"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Contact us today for a personalized consultation, and discover how Gotis can help you achieve your automation and AI goals.
          </p>

          <a href="mailto:gotis@gmail.com" className="btn btn-primary btn-wide">
            Contact an AI Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
