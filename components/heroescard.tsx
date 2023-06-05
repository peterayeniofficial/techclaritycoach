import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Card, Cards } from "nextra-theme-docs";
import Image from "next/image";

const heroes = [
  {
    name: "DHH",
    icon: GlobeAltIcon,
    description:
      "Creator of Ruby on Rails, Co-owner & CTO of 37signals (Basecamp & HEY), NYT best-selling author, and Le Mans 24h class-winner.",
    link: "https://twitter.com/dhh",
    handle: "@dhh",
    imageURL: "/assets/heroes/dhh.jpeg",
  },
  {
    name: "Sarah Drasner",
    icon: GlobeAltIcon,
    description:
      "Director of Eng, Web Infra @google , O'Reilly Author • OpenJS Board Member",
    link: "https://twitter.com/sarah_edo",
    handle: "@sarah_edo",
    imageURL: "/assets/heroes/sarah.jpeg",
  },
  {
    name: "Lee Robinson",
    icon: GlobeAltIcon,
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
        {heroes.map(({ icon: Icon, ...heroe }, i) => (
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
                  <Icon
                    className="block w-8 h-8"
                    style={{ height: 24, width: 24 }}
                    aria-hidden="true"
                  />
                }
                title={heroe.handle}
                href={heroe.link}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Heroes;
