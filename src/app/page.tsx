import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfbfb] px-4 py-10">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 flex flex-col gap-8">
        {/* Hero/About Section */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-zinc-900">Clinton Rori</h1>
          <p className="text-sm text-blue-700 font-medium mb-1">
            Distributed Systems Developer <span className="text-zinc-400 font-normal">|</span> Performance &amp; Architecture
          </p>
          <p className="text-xs text-zinc-500">Nairobi County, Kenya</p>
        </div>
        <div>
          <h2 className="sr-only">Summary</h2>
          <p className="text-base text-zinc-700 mb-1">
            I design and optimize distributed systems with a focus on simplicity and efficiency. I specialize in untangling complex architectures and improving system performance without overengineering.
          </p>
        </div>
        {/* Experience Section */}
        <div>
          <h2 className="text-zinc-900 font-semibold text-lg mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-800">Zen Technologies Corporations</span>
                <span className="text-xs text-zinc-500">Dec 2024 – Present</span>
              </div>
              <div className="text-sm text-zinc-700">Software Engineer · Nairobi County, Kenya</div>
              <ul className="list-disc list-inside text-zinc-600 text-sm mt-2 space-y-1">
                <li>Write high-quality, maintainable code for MVPs or full-scale solutions.</li>
                <li>Rapidly prototype new features to test feasibility in early-stage startups.</li>
                <li>Develop real-time live platforms using Java, Spring Boot, or GraphQL for defense training systems.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-800">DevelopForMe</span>
                <span className="text-xs text-zinc-500">Feb 2022 – May 2025</span>
              </div>
              <div className="text-sm text-zinc-700">Full-stack Developer · Nairobi County, Kenya</div>
              <ul className="list-disc list-inside text-zinc-600 text-sm mt-2 space-y-1">
                <li>Building and shipping scalable, efficient software to manage client needs.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-800">DevelopForMe</span>
                <span className="text-xs text-zinc-500">May 2021 – May 2025</span>
              </div>
              <div className="text-sm text-zinc-700">Founding Partner · Nairobi County, Kenya</div>
              <ul className="list-disc list-inside text-zinc-600 text-sm mt-2 space-y-1">
                <li>Lead end-to-end development of web applications, collaborating with cross-functional teams for quality project delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
