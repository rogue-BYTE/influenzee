import React from "react";

const teamMembers = [
  {
    name: "Shivang Awasthi",
    role: "CTO",
    image: "https://via.placeholder.com/150",
    // description: "Shivang Awasthi is the visionary behind our platform, connecting influencers with creative minds. With a background in marketing and a passion for storytelling, she drives our mission forward."
  },
  {
    name: "Ayush Jaiswal",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150",
    // description: "Michael ensures our platform is as intuitive as it is beautiful. He brings years of UI/UX expertise, crafting seamless experiences for users."
  },
  {
    name: "Rahul Prabhakar",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
    // description: "Sophia bridges the gap between influencers and creatives, forging meaningful connections. Her experience in networking makes collaborations effortless."
  },
  {
    name: "Vedant Anand",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
    // description: "Daniel turns ideas into reality, ensuring our platform runs smoothly. With a deep love for code, he keeps everything fast and secure."
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-10 py-16">
      {/* Mission Statement */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Us</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Our mission is to bridge the gap between **influencers** and **creative professionals** like scriptwriters, photographers, and stylists. We empower creators by making collaboration effortless, ensuring that every project reaches its full potential.
        </p>
      </section>

      {/* The Problem We Solve */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold">The Problem We Solve</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          Many influencers struggle to find **reliable creatives** to bring their vision to life. At the same time, talented professionals lack the right opportunities. Our platform eliminates this disconnect, providing a seamless way to connect and collaborate.
        </p>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-800 shadow-lg">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-blue-400">{member.role}</p>
              <p className="mt-3 text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
