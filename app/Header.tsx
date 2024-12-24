import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div id="header" className="mx-auto">
      <div className="top-0 flex flex-col max-w-full mx-auto overflow-hidden">
        <div className="relative  w-full h-[800px] sm:h-[400px] xl:h-[900px]">
          <Image
            src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1734986708/watproPortada_vghdzn.jpg"
            alt="image"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full"
          ></Image>
        </div>
        <div className=" z-50 m-4 mx-auto bg-blue-100/70 p-8 -mt-72 rounded-2xl text-blue-800 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-center w-full text-2xl font-semibold sm:text-3xl"
            >
              ESTAMOS AQUI
            </a>
          </div>
          <div className="w-full text-center">
            <p>Soluciones de agua residuales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
