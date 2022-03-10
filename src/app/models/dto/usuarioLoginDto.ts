export interface IDataLogin {
    estado:string,
    clave: string;
}

export interface IDatosUsuario {
    idPersona: number;
    comuna: string;
    tipoDocumento: string;
    rutUsuario: string;
    correoElectronico: string;
    nombre: string;
    apellidoPaterno: string;
    apellidiMaterno: string;
    fechanacimiento: string;
    celular: string;
    planta: string;
    nacionalidad: string;
    sexo: string;
    estadoPersona: string;
    idUsuario: number;
    fechaCreacion: string;
    estadoUsuario: string;
    nombreJefatura: string;
    nombreGerente: string; 
}

interface IRespuesta {
    dataLogin: IDataLogin;
    datosUsuarios:IDatosUsuario
}

export interface ILoginResult {
    loginResult: IRespuesta;
}