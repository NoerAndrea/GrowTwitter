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
    public get autorResposta(): Usuario{
        return this.autor
    }
    public get mensagemRespondida(): Tweet{
        return this.mensagem
    }
    public get conteudoRespondido(): string{
        return this.conteudo
    }
}