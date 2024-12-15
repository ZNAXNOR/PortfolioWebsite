import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Website",
  description: "About Website",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About this Website</h1>
      <p>Page Content comming soon!</p>
    </section>
  );
}
