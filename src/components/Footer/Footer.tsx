import { FooterData } from "./footerData";

export const Footer = () => {
  return (
    <footer className="p-5 mt-10 text-white bg-blue-950 md:px-20 md:py-10">
      <div className="grid md:grid-cols-[350px_1fr_1fr_1fr] md:gap-10 ">
        <div className="">
          <img
            src="https://i.ibb.co/BLrhGNj/Captura-desde-2024-05-27-08-20-49.png"
            alt="Logo-website"
            className="w-24 md:w-48"
          />
          <p className="mt-4 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, ea consequuntur dolores illo quae cupiditate
            doloremque incidunt, officia dicta exercitationem soluta vitae
            error, nesciunt numquam.
          </p>
        </div>
        {/* {FooterData.map(({ id, title, name, information, contact }) => (
          <div key={id} className="mt-4">
            <h2 className="text-xl">{name} </h2>
            <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 ">
              <li className="">{title}</li>
            </ul>
          </div>
        ))} */}

        <div className="my-3 ">
          <h4 className="text-xl font-bold text-white">Plataform</h4>
          <p className="my-4">Overview</p>
          <p className="my-4">Features</p>
          <p className="my-4">About</p>
          <p className="my-4">Pricing</p>
        </div>
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Help</h4>
          <p className="my-4">How we work?</p>
          <p className="my-4">Where are the questions?</p>
          <p className="my-4">How to pay?</p>
          <p className="my-4">What we need for this?</p>
        </div>
        <div className="my-3">
          <h4 className="text-xl font-bold text-white">Plataform</h4>
          <p className="my-4">(+58) 424-8125457</p>
          <p className="my-4">Contatame</p>
          <p className="my-4">Anzoategui, Venezuela</p>
        </div>
      </div>
    </footer>
  );
};
