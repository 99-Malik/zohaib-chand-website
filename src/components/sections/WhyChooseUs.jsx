"use client";
import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

const WhyChooseUs = ({ company = companyName }) => {
  return (
    <section id="contact" className="flex justify-center w-full">
      <div className="flex w-full max-w-7xl px-5 py-20 flex-col justify-center items-center">
        <div className="text-3xl w-fit flex justify-center items-center flex-col gap-2 font-semibold uppercase mb-8">
          Why Choose Us
          <div
            className={cn(
              "w-1/2 h-0.5",
              company === "Lg"
                ? "bg-lgPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : "bg-primary"
            )}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto text-lg mb-6">
          <p className="mb-4">
         We understand that choosing the right appliance repair
            service is crucial for your home. Our commitment to excellence,
            combined with our extensive experience, makes us the ideal choice
            for all your appliance needs. Here's why our customers trust us:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Expert Technicians:</span> Our
              certified technicians are well-trained in the latest repair
              techniques, ensuring efficient and reliable service.
            </li>
            <li>
              <span className="font-bold">Quality Repairs:</span> We use
              top-quality parts and tools, restoring your appliances to their
              optimal performance.
            </li>
            <li>
              <span className="font-bold">Transparent Pricing:</span> Enjoy
              clear and competitive pricing with no hidden fees, so you know
              exactly what to expect.
            </li>
            <li>
              <span className="font-bold">Convenient Service:</span> We offer
              flexible scheduling options, including same-day and emergency
              services, to fit your busy lifestyle.
            </li>
            <li>
              <span className="font-bold">
                Customer Satisfaction Guarantee:
              </span>{" "}
              We back our work with a warranty on all repairs, ensuring peace of
              mind with every service.
            </li>
            <li>
              <span className="font-bold">Responsive Support:</span> Our
              friendly customer service team is always ready to assist with any
              questions or concerns you may have.
            </li>
          </ul>
        </div>
        <CallAndWhatsappButton company={company} className="py-5" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
