"use client";
import React, { useState } from "react";

export default function SideBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Botón para abrir el sidebar */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-500 text-white rounded-md m-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-sky-900 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        {/* Botón para cerrar el sidebar */}
        <button
          onClick={toggleSidebar}
          className="p-2 bg-red-500 text-white rounded-md m-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>

        <div className="p-4">
          <h2 className="text-2xl font-bold">Menú</h2>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#header" className="block px-4 py-2 hover:bg-sky-700">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-sky-700">
              Quienes somos
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-sky-700">
              Nuestros productos
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-sky-700">
              Procesos
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-sky-700">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
