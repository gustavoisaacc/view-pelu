import "../style/footer.css"

function CopyRigth() {
    return (
        <div className="footer-copyright footer ">
            &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </div>
    )
}

export default CopyRigth;