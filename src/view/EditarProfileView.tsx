import Button from "../components/Button";
import EditUser from "../components/profile/EditUser";

function EditarProfileView() {
  return (
    <>
      <Button route="/dashboard" className=" inline-block  ml-16 mt-10">
        Volver
      </Button>
      <div className="max-w-screen-xl m-auto p-16">
        <h1 className=" text-2xl capitalize font-semibold my-5">
          Editar Perfil
        </h1>
      </div>
      <div className="max-w-screen-xl m-auto p-16 w-full">
        <form>
          <EditUser />
          <button
            type="submit"
            className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default EditarProfileView;
