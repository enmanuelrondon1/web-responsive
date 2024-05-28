import { MotionTransition } from "../MotionTransition";

export const Practice = () => {
  return (
    <MotionTransition>
      <div id="practice" className="grid items-center py-20 md:grid-cols-2 md:py-56 ">
        <div className="md:pr-20">
          <h2 className="mb-10 text-4xl font-extrabold">
            Puedes practicar a cualquier hora <br />
            <span className="text-pink-400"> que se adapte a ti</span>
          </h2>
          <p className="mb-10 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, doloremque ea aliquam ipsa maxime tempore expedita ab nihil repellendus facilis.</p>
          <button className="px-8 py-3 text-white bg-pink-400 rounded-xl">Comienza ya</button>
        </div>
      <video  width={750} height={500} autoPlay muted loop >
        <source src="https://firebasestorage.googleapis.com/v0/b/proyectos-varios-9bd5f.appspot.com/o/proyectos%20varios%2Fbusiness.mp4?alt=media&token=4e7efe04-b4ea-4a59-93e8-4d45c9549993" type="video/mp4" />
      </video>
      </div>
    </MotionTransition>
  );
};
