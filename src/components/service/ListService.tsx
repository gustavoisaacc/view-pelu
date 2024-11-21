import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useParams, Link } from "react-router-dom";

import { Service } from "../../schema/service.schema";

import { Clock, DollarSign, Scissors } from "lucide-react";

type ListServiceType = {
  dataService: Service[];
  mutate: (id: string, categoryId: string) => void;
};

function ListService({ dataService, mutate }: ListServiceType) {
  const params = useParams();
  const categoryId = params.categoryId!;

  return (
    <>
      {dataService && dataService.length ? (
        <ul className="grid gap-4">
          {dataService.map((service) => (
            <li
              key={service._id}
              className="border-2 bg-[#e1bee7] hover:border-[#9c27b0] rounded p-4 transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-[#4a148c] flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-[#9c27b0]" />
                  {service.name.toUpperCase()}
                </h2>
                <Menu as="div" className="relative">
                  <MenuButton className="-m-2.5 block p-2.5 text-white hover:text-secondary">
                    <span className="sr-only">opciones</span>
                    <EllipsisVerticalIcon
                      className="h-9 w-9"
                      aria-hidden="true"
                    />
                  </MenuButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      static
                      className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <MenuItem>
                        <Link
                          to={`?serviceId=${service._id}`}
                          className=" block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        >
                          Editar Categoria
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-red-600 w-full text-left"
                          onClick={() =>
                            mutate({ serviceId: service._id, categoryId })
                          }
                        >
                          Eliminar
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {service.description.toUpperCase()}
              </p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-[#9c27b0]">
                  <Clock className="h-4 w-4" />
                  <span>Duración: {service.duration}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#9c27b0]">
                  <DollarSign className="h-4 w-4" />
                  <span>{service.price.toLocaleString()}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-gray-200 font-semibold text-4xl text-center mt-10">
          Aún no hay Servicios
        </h1>
      )}
    </>
  );
}

export default ListService;
