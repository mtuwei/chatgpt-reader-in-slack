import React from "react";

const Hero = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto py-20">
        <h1 className="font-bold text-4xl mb-6">
          A new way to read with AI bot
        </h1>
        <p className="text-gray-600 leading-normal mb-8 max-w-2xl mx-auto">
          myGPTReader is a bot on Slack that can read and summarize any webpage,
          documents including ebooks, or even videos from YouTube. It can even
          communicate with you through voice by using the content in the
          channel.
        </p>
        <a
          href="https://slack-redirect.i365.tech/"
          className="py-3 px-6 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:bg-gray-700"
        >
          Join Now
        </a>
        <img className="mt-12 mx-auto w-4/5" src="/hero.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;