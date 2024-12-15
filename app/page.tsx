import Image from "next/image";
import { socialLinks } from "./config";
import { Balancer } from 'react-wrap-balancer'

export default function Page() {
  return (
    <section className="container mx-auto relative flex flex-col lg:flex-row">
      {/* Profile Photo */}
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg" alt="Profile photo"
          className="rounded-full bg-gray-100 block mx-auto"
          unoptimized width={160} height={160} priority/>
      </a>

      {/* Text Content */}
      <div className="lg:mt-5 text-center mt-5 mx-auto lg:text-left">
        <h1 className="mb-8 text-5xl font-medium ms">Welcome to my 
          <strong className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500"> Portfolio!</strong>
        </h1>
        <div className="prose prose-neutral dark:prose-invert text-balance">
          <p>
            Hello! This is Omkar and welcome to my personal portfolio website!
          </p>
          <p>
            Designed with clean, fast, and lightweight tools to showcase
            projects and skills effectively. Learn more about my website{" "} 
            <a href="/website">here</a>
          </p>
          <p>
            It includes essential features: SEO optimization, MDX support,
            analytics, and more for a great experience.
          </p>
          <p>
            The site is open-source and customizable, making it a perfect
            starting point for unique portfolios. Explore my projects, skills,
            and more as you scroll.
          </p>
        </div>
      </div>
    </section>
  );
}
