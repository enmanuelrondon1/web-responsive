import { dataSocialNetworks } from "@/data/dataSocialNetworks";
import Image from "next/image";
import Link from "next/link";

export const Overview = () => {
  return (
    <div
      id="overview"
      className="p-5 mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 md:px-24 md:py-52"
    >
      <div className="items-center md:grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-white md:leading-snug md:text-6xl">
            Desarrolla tus skills
          </h1>
          <p className="mt-5 text-white text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            obcaecati voluptate inventore nisi expedita quia mollitia est optio
            consectetur a.
          </p>
          <div className="flex justify-start gap-4 my-10">
            {dataSocialNetworks.map(({ id, icon, name, link }) => (
              <Link href={link} key={id} target="_blank" rel="noreferrer">
                <Image
                  src={`/svg/${icon}.svg`}
                  alt={name}
                  width="40"
                  height="40"
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-between">
            <button className="px-8 py-3 mr-10 text-white bg-pink-400 rounded-xl">
              Empieza ya
            </button>
            <button className="px-8 py-3 mr-10 text-white border-2 rounded-xl">
              Tengo un cupon
            </button>
          </div>
        </div>
        <div>
          <Image
            src="https://i.ibb.co/gSJL2N9/overview.png"
            alt="Overview"
            width="350"
            height="500"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};
