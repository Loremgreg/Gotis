"use client";

import { useState } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "AI Audit",
    description: "Our AI Audit services are designed to give you a clear picture of your organization’s current use of artificial intelligence and pinpoint areas where you can improve.\n\nWe thoroughly review your existing AI tools, data workflows, and operational processes to evaluate their effectiveness, efficiency, and alignment with your business goals.\n\nFollowing this assessment, we deliver practical recommendations, strategic insights, and a tailored action plan to help you strengthen your AI initiatives and get the most value from your investments.\n\nWhether you’re looking to enhance established systems or are just starting to explore AI, our audit will help you understand your current position and outline the best next steps for your organization.",
  },
  {
    title: "AI Consulting",
    description: "Our single-project AI consulting service delivers customized, one-off solutions crafted to solve your business’s unique challenges.\n\nWhether you want to introduce a new AI-powered workflow, build a predictive analytics tool, or automate a specific part of your operations, we partner with you to create and implement a solution that fits your goals.\n\nEvery project is tailored to your needs, providing fast results and clear, measurable outcomes.\n\nAt the end of the project, you’ll have a fully operational AI system ready to deliver instant value, and we’ll ensure you have everything needed for a smooth transition and ongoing success.",
  },
];

// A single navigation tab for the “How we can help” section.
const Tab = ({ title, isActive, onClick }) => (
  <li className="list-none">
    <button
      className={`px-5 py-2 rounded-md font-medium tracking-tight transition
        ${isActive ? "bg-primary text-white" : "text-base-content hover:text-primary"}`}
      onClick={onClick}
    >
      {title}
    </button>
  </li>
);

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      id="features"
      className="py-24 md:py-32 max-w-6xl mx-auto px-8 bg-base-100"
    >
      <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-12 text-center mx-auto">
        How we can help
      </h2>

      {/* Tabs row */}
      <ul className="flex flex-wrap justify-center gap-4 mb-16">
        {features.map((f, i) => (
          <Tab
            key={f.title}
            title={f.title}
            isActive={featureSelected === i}
            onClick={() => setFeatureSelected(i)}
          />
        ))}
      </ul>

      {/* Content panel */}
      <div className="max-w-3xl mx-auto leading-relaxed space-y-6 text-base-content-secondary text-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold">
          {features[featureSelected].title}
        </h3>

        {features[featureSelected].description
          .split("\n\n")
          .map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="mailto:gotis@gmail.com"
          className="btn btn-primary btn-wide font-mono tracking-widest"
        >
          CONTACT AN AI EXPERT
        </a>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
