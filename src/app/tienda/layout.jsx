import Link from "next/link"


export const metadata = {
    title: "Tienda"
}
const TiendaLayout = ({ children }) => {
    return (
        <>
            <nav>
                <h3>Sección tienda:</h3>
                <ul>
                    <li><Link href="/tienda/categorias">Categorías</Link></li>
                    <li><Link href="/tienda/categorias/computadoras">Computadoras</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}

export default TiendaLayout