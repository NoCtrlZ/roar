import net from 'net';

export default class Client {
    host: string;
    port: number;
    charSet: string;

    constructor(host: string, port: number, charSet = 'utf8') {
        this.host = host;
        this.port = port;
        this.charSet = charSet;
    }

    get = (content: string): Promise<string> =>
        new Promise((resolve) => {
            const socket = newSocket();
            socket.connect(this.port, this.host, () => socket.write(content));
            socket.on('data', (data: any) => {
                socket.destroy();
                resolve(data.toString());
            });
        });
}

const newSocket = () => new net.Socket();
