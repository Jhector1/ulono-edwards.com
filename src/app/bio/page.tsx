import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BioPage() {
  return (
    <main className="bg-gray-100 text-gray-900">
      
      {/* Bio Section with Profile Image */}
      <section
        id="bio"
        className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
      >
        {/* Profile Image */}
        <div className="w-48 h-48 relative flex-shrink-0">
          <Image
            src="/images/hero.jpg"
            alt="Dr. Edward C. Davis IV"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Bio Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Dr. Edward C. Davis IV
          </h1>
          <p className="mb-4 text-lg">
            Born in Chicago with ancestral roots tracing back to the Underground Railroad and the Great Migration, Dr. Davis is a Melungeon Maroon descendant whose scholarly journey spans New York University, UC Berkeley, and the University of Cambridge.
          </p>
          <p className="mb-4 text-lg">
            As a global sociocultural anthropologist, licensed K–12 teacher, and tenured professor, he has taught Africana Studies, Anthropology, History, and French at institutions in the US and the Democratic Republic of Congo.
          </p>
          <Link
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-[#E85E2D] hover:bg-yellow-600 text-white rounded-full font-semibold"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Consulting & Professional Development
            </h3>
            <p>
              Customized antiracist trainings for governments, educational systems, and corporations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Speeches & Webinars</h3>
            <p>
              Engaging talks on Uloño philosophy, African Diaspora, and intercultural equity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Cultural & Tourism Advising
            </h3>
            <p>
              Guidance on heritage tourism, cultural preservation, and community development.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Educational Collaborations
            </h3>
            <p>
              Curriculum design, program leadership, and intercultural pedagogy.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-semibold mb-6">Resources</h2>
        <p>
          Pre-order Dr. Davis’s upcoming book{" "}
          <em>Beer, Blood, Bleach, and the Bible</em>, coming in 2026 from
          Cambridge Scholars Publishing.
        </p>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Book Dr. Davis for consultations, trainings, and speaking engagements worldwide.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-[#E85E2D] hover:bg-[#E85E2D] text-white rounded-full font-semibold"
        >
          Contact Now
        </Link>
      </section>
    </main>
  );
}
