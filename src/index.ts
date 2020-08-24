import Client from './client';

const port = 3000;
const host = 'localhost';

interface Sample {
    code: number;
    data: string;
}

const sendRequest = () => {
    const client = new Client(host, port);
    client.get('/path').then((res) => {
        console.log(res);
    });
    const sample: Sample = {
        code: 200,
        data: 'hello'
    };
    client.post('/user/register', sample).then((res) => {
        console.log(res);
    });
};

sendRequest();
