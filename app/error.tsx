"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-orange-600">Oops!</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">Page not found</h1>
      <p className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">Something went wrong. Maybe try refreshing?</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
        hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-orange-600">Go back home</a>
        <a href="#" className="text-sm font-semibold ">Provide Feedback <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
  );
}
