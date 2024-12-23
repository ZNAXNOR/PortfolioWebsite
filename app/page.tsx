import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="container mx-auto relative flex flex-col lg:flex-row">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col px-8 lg:px-16">
          {/* Profile Photo */}
          <a href={socialLinks.linkedin} target="_blank">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block mx-auto"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
          <a href="/resume">
            <button
              className="mt-10 w-full rounded-md bg-transparent px-3.5 py-2.5 
                    ring-2 ring-orange-500 hover:ring-0 focus:ring-gray-700 focus:ring-offset-4
                    text-center text-sm font-semibold text-orange-500 hover:text-white
                    bg-gradient-to-r hover:from-red-600 hover:to-orange-600"
            >
              View Resume
            </button>
          </a>
        </div>

        {/* Right Column - Form */}
        <div className="flex flex-col">
          {/* Text Content */}
          <div className="lg:mt-5 text-center mt-5 mx-auto lg:text-left">
            <h1 className="mb-8 text-5xl font-medium ms">
              Welcome to my
              <strong
                className="bg-clip-text text-transparent bg-gradient-to-r
                    from-red-500 to-orange-500"
              >
                {" "}
                Portfolio!
              </strong>
            </h1>
            <div className="prose prose-neutral dark:prose-invert text-balance">
              <p>Hello! This is Omkar and welcome to my portfolio website!</p>
              <p>
                This website was designed with NextJS as framework for clean,
                fast, and lightweight tools to showcase projects and skills
                effectively. I plan to add some new features in the future. If
                you have any suggestions, feel free to leave them{" "}
                <a href="/suggestions" target="_blank">
                  here.
                </a>
              </p>
              <p>
                The site is open-source and customizable, making it a perfect
                starting point for unique portfolios. Explore my projects,
                skills, and more as you scroll. You can also access the website
                code and contribute{" "}
                <a
                  href="https://github.com/ZNAXNOR/PortfolioWebsite/tree/NextJSapp"
                  target="_blank"
                >
                  here.
                </a>
              </p>
              <p>
                If you encounter any issue, feel free to let me know{" "}
                <a href="/feedback" target="_blank">
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
