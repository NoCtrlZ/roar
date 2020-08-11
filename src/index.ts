import net from 'net'

const client = new net.Socket();
const port = 80
const host = "artree.co.jp"
const request = "GET / HTTP/1.1\r\nHost: localhost:5000\r\nUser-Agent: curl/7.54.0\r\nAccept: */*\r\n\r\ntest"
client.setEncoding('utf8');

const get = () => {
    client.connect(port, host, () => {
        console.log("send")
        client.write(request);
    })

    client.on('data', (data :any) => {
        console.log("Data is following" + data);
        client.destroy();
    });

    client.on('close', () => {
        console.log('Connection closed');
    });
}

get()
