import React from "react";
import Image from "next/image";
import SideBar from "./SideBar";

export default function Navbar() {
  return (
    <div>
      <ul className="flex bg-amber-200 flex-row  top-0 items-center justify-around">
        <div>
          <Image
            src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1735056704/watproportada2-removebg-preview_zqzpni.png"
            height={100}
            width={100}
            alt="logo"
          />
        </div>
        <div className="flex-row gap-3 hidden lg:flex">
          <li className="rounded-br-2xl rounded-tl-2xl border-2 border-sky-800 p-1 bg-sky-900 text-white">
            Inicio
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl border-2 border-sky-800 p-1 bg-sky-900 text-white">
            Quienes somos
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl border-2 border-sky-800 p-1 bg-sky-900 text-white">
            Nuestros productos
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl border-2 border-sky-800 p-1 bg-sky-900 text-white">
            Procesos
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl border-2 border-sky-800 p-1 bg-sky-900 text-white">
            Contacto
          </li>
        </div>
        <div className="lg:hidden">
        <SideBar/>
        </div>
      </ul>
    </div>
  );
}
