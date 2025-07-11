import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="w-full bg-neutral flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-center lg:items-center">


        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          AI For Your Business
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Stop wasting time and money on repetitive tasks.
        </p>
        <a href="#features" className="btn btn-primary btn-wide">
          Discover our solutions
        </a>

      </div>

    </section>
  );
};

export default Hero;
