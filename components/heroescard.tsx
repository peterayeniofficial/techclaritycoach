import Image from "next/image";
import { heroes } from "data/heroes";
import Link from "next/link";

function Heroes() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
        {heroes.map(({ ...heroe }, i) => (
          <Link href={heroe.link}>
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
                <div className="my-0 font-small dark:text-white mb-3">
                  {heroe.handle}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Heroes;
