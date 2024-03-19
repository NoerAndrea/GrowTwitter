import { randomUUID } from "crypto"
import { Tweet } from "./tweet";

export class Gostar {
    private _idGostar: string = randomUUID();    
    
    constructor(     
        public username: string,
        public mensagem: Tweet
    ){
        this.username = username
    }    
    public get nomeUsuario(): string{
        return this.username
    }
    public get mensagemPostada(): Tweet{
        return this.mensagem
    }
    public get idGostar(): string{
        return this._idGostar
    }
}