interface IQuery {
    host: string;
    port: number;
    motd: string;
    gametype: string;
    version: string | null;
    software: string | null;
    plugins: string | null;
    map: string | null;
    online: number | null;
    max: number | null;
    players: string[];
}

declare function query(host: string, port?: number, timeout?: number): Promise<IQuery>;
export = query;
