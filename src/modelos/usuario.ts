import { randomUUID } from "crypto"
import { Tweet } from "./tweet"
import { Gostar } from "./gostar"
import { Resposta } from "./resposta"

export class Usuario {
    private _id: string = randomUUID()
    private _seguidos: Usuario[] = []
    private _tweetsPorUsuario: Tweet[] = []
    private _gostar: Gostar[] = []
    private _resposta: Resposta[] = [];

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
    public get seguidos(): Usuario[] {
        return this._seguidos
    }
    public get tweetsPorUsuario(): Tweet[] {
        return this._tweetsPorUsuario
    }
    public get gostar(): Gostar[]{
        return this._gostar
    }
    public get resposta(): Resposta[]{
        return this._resposta
    }

    public mostraTweet(): void {
        this._tweetsPorUsuario.forEach(elemento => {
            console.log(`@${this.username}: ${elemento.conteudo}`);
    
            const gostar = elemento.gostar;
            const curtidas = gostar.length;

            if(curtidas === 0){
                console.log(`   [0 curtidas]`);
            }    
            if (curtidas > 0) {
                const primeiroUsuario = gostar[0].username;

                if (curtidas === 1) {
                    console.log(`   [@${primeiroUsuario} curtiu]`);
                } else {
                    const outrosCurtiram = curtidas - 1;
                    
                    console.log(`   [@${primeiroUsuario} e mais ${outrosCurtiram} usuário(s) curtiram]`);
                }
            }                
           const tipo = elemento.tipo;           
           
           if (tipo === 'responder') {
            if(elemento.resposta.length > 0){
                elemento.resposta.forEach(resposta => {
                    console.log(`>@${resposta.autor.username}: ${resposta.conteudo}`);                    
                })
            } 
        }          
            console.log('------------------------');
        });
    } 

    public mostraPerfil(): void {
        console.log(`Tweets de @${this.username}:`);
            this.tweetsPorUsuario.forEach(tweet => {
                console.log(`   Conteúdo: ${tweet.conteudo}`);
                console.log(`   Curtidas: ${tweet.gostar.length}`);
                console.log(`   Respostas: ${tweet.resposta.length}`);
                console.log('-----------------');
        });
    
        this._seguidos.forEach(usuario => {
            console.log(`Tweets de @${usuario.username}:`);
            usuario.tweetsPorUsuario.forEach(tweet => {
                console.log(`   Conteúdo: ${tweet.conteudo}`);
                console.log(`   Curtidas: ${tweet.gostar.length}`);
                console.log(`   Respostas: ${tweet.resposta.length}`);
                console.log('________________');
            });
        });
    }
}