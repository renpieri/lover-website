import * as yup from 'yup'

//SHOW SCHEME
const usuarioScheme = yup.object({
    nombre: yup.string().required('El nombre es requerido').trim(),
    email: yup.string().email('Debes ingresar un email válido').required('El email es requerido').trim(),
}).noUnknown()


export {
    usuarioScheme,
}