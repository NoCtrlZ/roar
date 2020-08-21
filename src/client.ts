import net from 'net';
import Request from './request';

export default class Client {
    host: string;
    port: number;
    charSet: string;

    constructor(host: string, port: number, charSet = 'utf8') {
        this.host = host;
        this.port = port;
        this.charSet = charSet;
    }

    get = (path: string): Promise<string> =>
        new Promise((resolve) => {
            const socket = newSocket();
            const request = new Request(path, 'GET');
            const content = `${request.getPrefix()}${request.getOrigin()}${request.getContentType()}\r\n`;
            console.log('contents is ', content);
            socket.connect(this.port, this.host, () => socket.write(content));
            socket.on('data', (data: any) => {
                socket.destroy();
                resolve(data.toString());
            });
        });
}

const newSocket = () => new net.Socket();
