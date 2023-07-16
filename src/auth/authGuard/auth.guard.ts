import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "src/modules/user/user.service";
import { AuthService } from "../auth.service";

@Injectable()
export class authGuard implements CanActivate{

    constructor(
        private readonly authService:AuthService,
        private readonly userService:UserService){}

    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const { authorization } = request.headers;
    
    try {
        const token:string = authorization?.split(' ')[1];
        const data = await this.authService.checkUserByToken(token);
        const user = await this.userService.findUserById(Number(data.sub))
        request.user = user;

    } catch (error) {
        console.log(error)
        return false;
    }
    return true;
}
}