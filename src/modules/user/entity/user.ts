export class user {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;


    constructor(_id:number,_name:string,_email:string,_password:string,_avatar:string){
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.avatar = _avatar;
    }

    getUser(){
        return `Esse é o usuário ${this.name} de email ${this.email}`
    }
}

const user1 = new user(1,'Pedro','pedro@gmail.com','123456','FotoDoPedro');