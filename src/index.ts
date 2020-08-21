import Client from './client';

const port = 3000;
const host = 'localhost';
const request =
    'GET / HTTP/1.1\r\nHost: localhost:5000\r\nUser-Agent: curl/7.54.0\r\nAccept: */*\r\n\r\ntest';

const sendRequest = () => {
    const client = new Client(host, port);
    client.get(request).then((res) => {
        console.log(res);
    });
};

sendRequest();
