"use client";
import React from "react";

const About = () => {
  return (
    <div className="relative bg-blue-50 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      {/* About Us Section */}
      <div className="text-center" id="about">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
          <span className="text-blue-600">About Us</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
            <span className="font-light">
              Welcome to our AI research company, where we specialize in helping
              businesses{" "}
            </span>
            <span className="font-semibold text-blue-600">
              unleash their true growth potential
            </span>
            <span className="font-light">
              . With a dedicated team of AI experts and a passion for
              innovation, we are here to revolutionize the way you do business.
            </span>
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
            <span className="font-light">Our </span>
            <span className="font-semibold text-blue-600">
              tailored AI solutions, ongoing support, and commitment to
              excellence
            </span>
            <span className="font-light">
              {" "}
              empower you to thrive in the digital era. Join us on the journey
              to ignite a revolution of growth and innovation.
            </span>
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-blue-600">
              Contact us today and unlock the power of AI for your business.
            </span>
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section */}
          <div className="text-center mb-10 mt-12 " id="our-approach">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
              <span className="text-blue-600">Our Approach</span>
            </h2>

            {/* Video Section */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-blue-100 p-1">
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <video
                    className="w-full h-auto rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    style={{ outline: "none" }}
                  >
                    <source src="/bellever_about.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl text-justify mx-auto leading-relaxed">
              We believe that the best service comes from understanding your
              unique needs and delivering
              <span className="font-semibold text-blue-600">
                {" "}
                innovative AI solutions{" "}
              </span>
              that drive real results.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <button className="group relative px-12 py-6 bg-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center text-lg">
                Get Started Today
                <svg
                  className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
