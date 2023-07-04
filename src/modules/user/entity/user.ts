import { randomUUID } from "crypto";

export class User {
    private readonly id: string;
    private _name: string;
    private _email: string;
    private _password: string;
    private _avatar: string;

    constructor(nameParam:string,emailParam:string,passwordParam:string,avatarParam:string){
        this.id = randomUUID();
        this.name = nameParam;
        this.email = emailParam;
        this.password = passwordParam;
        this.avatar = avatarParam;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }
    get avatar(): string {
        return this._avatar;
    }
    set avatar(value: string) {
        this._avatar = value;
    }

    getUser(){
        return `Esse é o usuário ${this.name} de email ${this.email}`
    }
    
}

const user1 = new User('Pedro','pedro@gmail.com','123456','FotoDoPedro');