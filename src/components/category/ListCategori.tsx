import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import { Category } from "../../schema/categroy.schema";

type ListCategoryProps = {
  data: Category[];
  mutate: (id: string) => void;
};
function ListCategori({ data, mutate }: ListCategoryProps) {
  return (
    <>
      {data.length ? (
        <ul
          role="list"
          className="divide-y divide-secondary border border-primary mt-10 bg-white shadow-lg"
        >
          {data.map((category) => (
            <li
              key={category._id}
              className="flex justify-between gap-x-6 px-5 py-10 bg-purple-50"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto space-y-2">
                  <Link
                    to={`/category/${category._id}`}
                    className="text-primary cursor-pointer hover:underline text-3xl"
                  >
                    {category.name}
                  </Link>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-6">
                <Menu as="div" className="relative flex-none">
                  <MenuButton className="-m-2.5 block p-2.5 text-primary hover:text-secondary">
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
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <MenuItem>
                        <Link
                          to={`/category/${category._id}`}
                          className="block px-3 py-1 text-sm leading-6 border-b border-white text-white"
                        >
                          Ver Servicios
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to={`?categoryId=${category._id}`}
                          className="block px-3 py-1 text-sm leading-6 border-b border-white text-white"
                        >
                          Editar Categoria
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <button
                          type="button"
                          className="block px-3 py-1 text-sm leading-6 text-red-500"
                          onClick={() => mutate(category._id)}
                        >
                          Eliminar Categoria
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-gray-400 font-semibold text-4xl text-center">
          Aun no hay categorias
        </h1>
      )}
    </>
  );
}

export default ListCategori;
