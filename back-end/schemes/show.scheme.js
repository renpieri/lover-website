import * as yup from 'yup'

//SHOW SCHEME
const showScheme = yup.object({
    dia: yup.date().min(new Date(), 'La fecha debe ser válida').required('El día es requerido'),
    hora: yup.string().required('La hora es requerida').trim(),
    lugar: yup.string().required('El lugar del evento es requerido').trim(),
    ciudad: yup.string().required('La ciudad es requerida').trim(),
    provincia: yup.string().required('La provincia es requerida').trim(),
    pais: yup.string().required('El país es requerido').trim(),
    precio: yup.number().typeError('Debes ingresar un número').positive('El precio no puede ser negativo').required('El precio de la entrada es requerido'),
}).noUnknown()


export {
    showScheme,
}