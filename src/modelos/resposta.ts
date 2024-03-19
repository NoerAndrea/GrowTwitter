import { Tweet } from "./tweet";
import { Usuario } from "./usuario";
import { randomUUID } from "crypto"

export class Resposta {
    private _idResposta: string = randomUUID();
    
    constructor(
        public mensagem: Tweet,
        public conteudo: string,
        public autor: Usuario
    ) {
        this.conteudo = conteudo;
    }
    public get idResposta(): string{
        return this._idResposta
    }    
}