import React from "react";

export default function ThankYou() {
  return (
    <section>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Thank You!
          </h2>
          <p className="mt-2 text-lg/8">
            Your message has been successfully submitted. I will get back to you soon!
          </p>
          <div className="mt-10">
            <a
              href="/"
              className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center 
              text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}