import { randomUUID } from "crypto";

export class Session {
    private readonly id: string;
    private _userId: string;
    private _session: string;

    constructor(userIdParam:string){
        this.id = randomUUID();
        this.userId = userIdParam;
        this.session = randomUUID();
    }

    get userId(): string {
        return this._userId;
    }
    set userId(value: string) {
        this._userId = value;
    }
    get session(): string {
        return this._session;
    }
    set session(value: string) {
        this._session = value;
    }

    getSession(){
        return `Sua sessão é ${this.session}`
    }

}