import { NextResponse } from "next/server"
console.log(process.env.TOKEN)

export async function GET(){
    //Extraer parámetros
    //Ejecutar queries
    //Comunicarme con otro backend o servicios
    //paypal, google cloud, cloudinary para subir archivos
    //Etc
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST(request){ //request: info que viene del cliente
    const data = await request.json()
    console.log(data)
    return NextResponse.json({
        message: "Creando datos"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "Actualizando datos"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "Eliminando datos"
    })
}

//Instalar postman o insomia para peticiones HTTP