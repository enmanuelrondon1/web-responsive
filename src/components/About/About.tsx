import Image from "next/image";
import { MotionTransition } from "../MotionTransition";

export const About = () => {
  return (
    <div id="about" className="grid items-center py-20 md:grid-cols-2 lg:py-56">
      <MotionTransition>
        <Image
          src="https://i.ibb.co/dtKgjx1/about.png"
          alt="about image"
          width="600"
          height="400"
        />
      </MotionTransition>
      <div className="md:pr-20">
        <h2 className="mb-10 text-4xl font-extrabold">
          Hemos estado <br />
          <span className="text-pink-400">mejorando nuestro producto</span>
          <br />
          durante años
        </h2>
        <p className="mb-10 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          quo quas, maiores natus reprehenderit adipisci corrupti ea illo animi
          minima?
        </p>
        <button className="px-8 py-3 bg-pink-400 rounded-xl text-white">Comienza ya</button>
      </div>
    </div>
  );
};
