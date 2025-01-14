"use client"; // Mark this as a client component

import { useRouter } from "next/navigation";
import {
  ChatBubbleLeftEllipsisIcon,
  LanguageIcon,
  PhotoIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Chatbot",
    description:
      "Ask questions and get insightful answers with our AI-powered chatbot.",
    icon: ChatBubbleLeftEllipsisIcon,
    link: "/ai/chat", // Link to the Chatbot page: app/ai/chat.tsx
  },
  {
    name: "Translate Sentences",
    description:
      "Translate your sentences effortlessly (currently supporting German).",
    icon: LanguageIcon,
    link: "/ai/translate", // Link to the Translate Sentences page
  },
  {
    name: "Image Identification",
    description:
      "Upload an image and let the AI identify its contents with ease.",
    icon: PhotoIcon,
    link: "/ai/identify", // Link to the Image Identification page
  },
  {
    name: "Image Generation",
    description: "Generate stunning images from text descriptions.",
    icon: PaintBrushIcon,
    link: "/ai/generate", // Link to the Image Generation page
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
                Explore AI Capabilities
                <span className="ms-4 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Powered by HuggingFace
                </span>
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                AI-Powered Tools for Your Portfolio
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Dive into the power of artificial intelligence. From chatting
                and translating to image identification and generation, our AI
                showcases versatility and innovation.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative flex cursor-pointer flex-col items-start rounded-lg bg-gray-50 p-6 shadow-sm hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-purple-800 transition"
                onClick={() => router.push(feature.link)}
              >
                <feature.icon
                  aria-hidden="true"
                  className="h-8 w-8 text-indigo-600 dark:text-indigo-400 group-hover:text-purple-600 dark:group-hover:text-purple-300"
                />
                <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-gray-100 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
