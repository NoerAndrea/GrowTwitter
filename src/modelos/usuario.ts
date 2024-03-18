import { randomUUID } from "crypto"
import { Tweet } from "./tweet"
import { usuarios } from "../banco/usuario.database"
import { Gostar } from "./gostar"

export class Usuario {
    private _id: string = randomUUID()
    private _seguidos: string[] = []
    private _tweetsPorUsuario: Tweet[] = []
    private _gostar: Gostar[] = []

    constructor(
        private _nome: string,
        private _email: string,
        public username: string,
        private _senha: string,
    ){
        this._tweetsPorUsuario = []
    }

    public get id(): string{
        return this._id
    }    
    public get nome(): string{
        return this._nome
    } 
    public get seguidos(): string[] {
        return this._seguidos
    }
    public get tweetsPorUsuario(): Tweet[] {
        return this._tweetsPorUsuario
    }
    public get gostar(): Gostar[]{
        return this._gostar
    }

    public mostraTweet(): void {
        this._tweetsPorUsuario.forEach(elemento => {
            console.log(`@${this.username}: ${elemento.conteudo}`)
            console.log(`${elemento.gostar}`);
            console.log(elemento.tipo);
            console.log('________________');            
        })
    }
    public mostraPerfil(){
        if(this.seguidos.length === 0){
            return 'Você não possiu seguidor(es).'
        }
        for(let i of this.seguidos){
            const pesquisa = usuarios.filter(seguindo => seguindo.username === i)
            const seguidoreUsuario = pesquisa.filter(usuario => usuario.mostraTweet)

            console.log(seguidoreUsuario);            
        }
        const imprimeUsuario = this.tweetsPorUsuario.forEach(item => {
            console.log(`${this.username}: ${item.gostar}`);
            console.log(`${item.gostar}`);
            console.log(item.tipo);
            console.log('________________');
        })
        console.log(imprimeUsuario);        
    }
}