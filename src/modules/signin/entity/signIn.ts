import { randomUUID } from "crypto";

export class Session {
    private readonly id: string;
    private userId: string;
    private session: string;

    constructor(userIdParam:string){
        this.id = randomUUID();
        this.userId = userIdParam;
        this.session = randomUUID();
    }


}