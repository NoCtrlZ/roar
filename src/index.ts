import Client from './client';

const port = 3000;
const host = 'localhost';

const sendRequest = () => {
    const client = new Client(host, port);
    client.get('/path').then((res) => {
        console.log(res);
    });
};

sendRequest();
