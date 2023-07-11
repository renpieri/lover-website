import { showScheme } from '../schemes/show.scheme.js';


function showValido(req, res, next) {
    showScheme.validate(req.body, {abortEarly: false})
    .then((show)=> {
        var options = {weekday: "long", year: "numeric", month: "numeric", day: "numeric"};
        show.dia = show.dia.toLocaleDateString('es-AR', options);
        req.body = show;
        next();
    })
    .catch(err => {
        res.status(400).json({errors: err.errors});
    });
}


export {
    showValido,
}