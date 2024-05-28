import Image from "next/image";
import Link from "next/link";

export const Nabvar = () => {
  return (
    <div className="grid items-center justify-between md:grid-cols-2 gap-4 md:gap-20 md:px-20">
      <Image
        src="https://i.ibb.co/BLrhGNj/Captura-desde-2024-05-27-08-20-49.png"
        width="200"
        height="25"
        alt="Logo-Enmanuel"
        className="mx-auto lg:mx-0 mt-4 "
        priority
      />
      <div className="flex gap-4 text-center">
        <Link href="#overview">Overview</Link>
        <Link href="#features">Features</Link>
        <Link href="#about">About</Link>
        <Link href="#pricing">Pricing</Link>

      </div>
    </div>
  );
};
