import { Card, Cards } from "nextra-theme-docs";
import Image from "next/image";

const heroes = [
  {
    name: "DHH",
    description:
      "Creator of Ruby on Rails, Co-owner & CTO of 37signals (Basecamp & HEY), NYT best-selling author, and Le Mans 24h class-winner.",
    link: "https://twitter.com/dhh",
    handle: "@dhh",
    imageURL: "/assets/heroes/dhh.jpeg",
  },
  {
    name: "Sarah Drasner",
    description:
      "Director of Eng, Web Infra @google , O'Reilly Author • OpenJS Board Member",
    link: "https://twitter.com/sarah_edo",
    handle: "@sarah_edo",
    imageURL: "/assets/heroes/sarah.jpeg",
  },
  {
    name: "Lee Robinson",
    description:
      "Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.",
    link: "https://twitter.com/leeerob",
    handle: "@leeerob",
    imageURL: "/assets/heroes/lee.jpeg",
  },
];

function Heroes() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
        {heroes.map(({ ...heroe }, i) => (
          <div
            className="flex items-center space-x-4"
            key={heroe.name.split(" ").join("-")}
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={heroe.imageURL} // Path to your image
                alt={heroe.name} // Alt text for your image
                width={300} // Width of your image
                height={300} // Height of your image
                className="object-cover"
              />
            </div>
            <div>
              <div className="my-0 font-medium dark:text-white mb-3">
                {heroe.name}
              </div>
              <p className="my-0 text-xs dark:text-white mb-2">
                {heroe.description}
              </p>

              <Card
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    />
                  </svg>
                }
                title={heroe.handle}
                href={heroe.link}
                arrow
              >
                <></>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Heroes;
