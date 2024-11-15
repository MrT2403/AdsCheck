import React from "react";
import {
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "50+" },
];

const values = [
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description:
      "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: UserGroupIcon,
    title: "Collaboration",
    description:
      "We work closely with our clients to ensure their vision becomes reality.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About SMIT
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company specializing in digital
            transformation and innovative solutions for businesses across
            Vietnam and beyond.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 pb-15">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 pb-10">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative bg-gray-50 p-8 rounded-lg"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 rounded-full p-3">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                  {value.title}
                </h4>
                <p className="mt-2 text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in
              technology, design, and business strategy to deliver exceptional
              results for our clients.
            </p>
          </div>
          <div className="mt-8 bg-gray-50 rounded-lg p-8">
            <div className="prose prose-blue mx-auto">
              <p className="text-gray-600 text-center">
                We are a team of passionate individuals dedicated to helping
                businesses succeed in the digital age. Our experts specialize in
                various fields including software development, UI/UX design,
                digital marketing, and project management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
