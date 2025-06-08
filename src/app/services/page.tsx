// src/components/ServicesSection.tsx
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">SERVICES</h2>
          <p className="mt-4 text-gray-600">How Mr. Crim Can Help</p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 leading-relaxed">
            Clients receive a dynamic, personalized keynote presentation—drawing from Mr. Crim’s own
            experience with a hate crime—that demonstrates how Black History can transform organizational
            culture equitably. Each presentation is tailored to your specific sociological concerns and
            geographic location, leveraging data-driven research and pre-assessment insights. Mr. Crim’s
            consultations include (but are not limited to):
          </p>
          <ul className="mt-6 list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Student Mentoring Program:</span> One-on-one and group mentoring
              for youth, designed to build academic, personal, and leadership skills.
            </li>
            <li>
              <span className="font-medium">Educator Coaching &amp; Mentorship:</span> Professional development
              on culturally responsive teaching, inclusive curricula, and anti-racist pedagogy.
            </li>
            <li>
              <span className="font-medium">Community Advocacy &amp; Cultural Competency:</span> Strategies for
              sustainable equitable change, coalition-building, and grassroots organizing.
            </li>
            <li>
              <span className="font-medium">Anti-Racist Parent Advocacy:</span> Guidance on supporting children,
              advocating for inclusive school policies, and fostering family engagement in equity work.
            </li>
            <li>
              <span className="font-medium">Promotional Opportunities:</span> Leveraging Mr. Crim’s social media
              platform (600k+ followers; 2M+ monthly reach) to promote programs, campaigns, and initiatives aligned
              with social justice, equity, and Black History.
            </li>
          </ul>
          <p className="mt-6 text-gray-700">
            As a social media marketer, Mr. Crim has partnered with HBO, Meta (formerly Facebook), Warner Bros.,
            A&E, and numerous non-profits to raise awareness for causes like land repatriation, constitutional
            rights advocacy, class-action lawsuits, and anti-censorship efforts. He also actively promotes
            Black-owned businesses and equity-focused organizations. Please contact Mr. Crim for more information.
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Keynote Presentations", icon: "🎤" },
            { title: "Consultations", icon: "🗓️" },
            { title: "Youth Mentoring", icon: "👩‍🏫" },
            { title: "Content Creation", icon: "🎥" },
            { title: "Social Media Marketing", icon: "📢" },
            { title: "Advocacy", icon: "🤝" },
          ].map(({ title, icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
            </div>
          ))}
        </div>

        {/* Detailed Offerings */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Presentations, Workshops, Consulting */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Keynote Presentations, Workshops &amp; Long-Term Consulting
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This list is not exhaustive—more presentations are available upon request. <br />
              <span className="italic text-gray-600">
                *This presentation has been given to all demographics.<br />
                **Mentoring program available upon request.
              </span>
            </p>

            {/* For Students */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-800">For Students</h4>
              <div className="mt-4 space-y-6">
                {/* Elementary School */}
                <div>
                  <h5 className="font-semibold text-gray-800">Elementary School</h5>
                  <p className="text-gray-700 ml-4">
                    <span className="font-medium">The ABCs of Affirming Our Children:</span> Improving literacy,
                    acceptance, and self-confidence through affirmations and Black History.
                  </p>
                </div>
                {/* Middle School */}
                <div>
                  <h5 className="font-semibold text-gray-800">Middle School</h5>
                  <p className="text-gray-700 ml-4">
                    <span className="font-medium">ProTEENtial:</span> A middle schooler’s guide on thinking
                    before acting and building character.
                  </p>
                </div>
                {/* High School & Middle School */}
                <div>
                  <h5 className="font-semibold text-gray-800">
                    High School &amp; Middle School
                  </h5>
                  <p className="text-gray-700 ml-4">
                    <span className="font-medium">Black History Saved My Life:</span> Using Black historical
                    narratives, anti-racist standards, and SEL principles to help teens reach academic and personal
                    potential.
                  </p>
                </div>
                {/* Universal */}
                <div>
                  <h5 className="font-semibold text-gray-800">Universal*</h5>
                  <p className="text-gray-700 ml-4">
                    <span className="font-medium">T.E.A.M.work Makes the Dreamwork:</span> Teaching tolerance,
                    equity, academic success, and motivation to students of all ages.
                  </p>
                </div>
              </div>
            </div>

            {/* For Educators */}
            <div className="mt-10">
              <h4 className="text-xl font-medium text-gray-800">For Educators</h4>
              <ul className="mt-4 ml-4 list-disc space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Black History Saved My Life &amp; Here’s How It Can Save Your Students.</span>
                </li>
                <li>
                  <span className="font-medium">Identifying Racial Blind Spots &amp; Implicit Bias.</span>
                </li>
                <li>
                  <span className="font-medium">How to Avoid Being a Guilty Bystander to Become an Effective Ally.</span>
                </li>
                <li>
                  <span className="font-medium">Cultural Awareness 101:</span> Bridging cultural gaps in your classroom and school.
                </li>
                <li>
                  <span className="font-medium">T.E.A.M.work Makes the Dreamwork:</span> Creating a school culture grounded
                  in tolerance, equity, academic success, and motivation.
                </li>
                <li>
                  <span className="font-medium">What is DEIJ &amp; How Can We Use This Framework to Create an Antiracist School Culture?</span>
                </li>
              </ul>
            </div>

            {/* For Companies & Organizations */}
            <div className="mt-10">
              <h4 className="text-xl font-medium text-gray-800">For Companies &amp; Organizations</h4>
              <ul className="mt-4 ml-4 list-disc space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Black History Saved My Life &amp; Here’s How It Can Save Your Organization.</span>
                </li>
                <li>
                  <span className="font-medium">Identifying Racial Blind Spots &amp; Implicit Bias.</span>
                </li>
                <li>
                  <span className="font-medium">How to Avoid Being a Guilty Bystander to Become an Effective Ally.</span>
                </li>
                <li>
                  <span className="font-medium">Cultural Awareness 101:</span> Bridging cultural gaps within your organization.
                </li>
                <li>
                  <span className="font-medium">What is DEIJ &amp; How Can We Use It to Create an Antiracist Culture?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Content Creation & Advocacy */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Social Media Content Creation &amp; Advocacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Mr. Crim will produce personalized social media videos (or series) to be shared on his platform of 800k+ followers
              (4M+ monthly reach). Specialties include:
            </p>
            <ul className="mt-6 ml-4 list-disc space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Mission-Driven:</span> Content focused on raising awareness and advocating for justice
                (e.g., reparations, environmental justice, educational equity, hate-crime awareness, systemic racism, political prisoner
                advocacy).
              </li>
              <li>
                <span className="font-medium">Travel Vlog:</span> Highlighting Black historical sites, leisure activities, and cultural
                stories in your city (e.g., coverage of Juneteenth events and cultural festivals in Williamsburg, VA; Springfield, IL;
                Chicago, IL).
              </li>
              <li>
                <span className="font-medium">Business Vlog:</span> Showcasing small businesses (Black- or minority-owned, women-owned,
                or community-engaged) and telling their unique stories. Mr. Crim has covered 100+ businesses with over 1M views since 2021
                (e.g., Choose Chicago tourism).
              </li>
              <li>
                <span className="font-medium">Food Vlog:</span> Highlighting restaurants (Black- or minority-owned, women-owned, or
                community-focused) and sharing their story. Over 100 business features with 1M+ views since 2021.
              </li>
              <li>
                <span className="font-medium">Product Placement:</span> Promoting movies, documentaries, or books by connecting unique
                narratives to broader themes of Black history, antiracism, equity, and justice. Past clients include HBO, HULU, Meta
                (Facebook), and Warner Bros.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
