import { MongoClient, ObjectId } from 'mongodb';
const client = new MongoClient('mongodb://127.0.0.1:27017');

client.connect()
    .then(async () => {
        console.log('Conectado a MongoDB');
    });


async function shows() {
    return client.connect()
        .then(() => {
            return client.db('LOVER_DB').collection('shows').find().toArray();
        });
}


async function showPorId(id) {
    return client.connect()
        .then(() => {
            return client.db('LOVER_DB').collection('shows').findOne({ _id: new ObjectId(id) });
        });
}


async function cargar(show) {
    const nuevoShow = {
        ...show
    };

    return client.connect()
        .then(() => {
            return client.db('LOVER_DB').collection('shows').insertOne(nuevoShow);
        })
        .then((result) => {
            return nuevoShow;
        });
}


async function editar(id, show) {
    return client.connect()
        .then(() => {
            return client.db('LOVER_DB').collection('shows').updateOne({ _id: new ObjectId(id) }, { $set: show });
        });
}


async function eliminar(id) {
    return client.connect()
        .then(() => {
            return client.db('LOVER_DB').collection('shows').deleteOne({ _id: new ObjectId(id) });
        });
}

export {
    shows,
    showPorId,
    cargar,
    editar,
    eliminar,
};
