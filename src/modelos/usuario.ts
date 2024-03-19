import { randomUUID } from "crypto"
import { Tweet } from "./tweet"
import { usuarios } from "../banco/usuario.database"
import { Gostar } from "./gostar"
import { Resposta } from "./resposta"
import { respostas} from "../banco/resposta.database"

export class Usuario {
    private _id: string = randomUUID()
    private _seguidos: string[] = []
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
    public get seguidos(): string[] {
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
            if (respostas.length > 0 && respostas[0].mensagem === elemento) {
                const autorResposta = respostas[0].autorResposta.username;
                const conteudoResposta = respostas[0].conteudoRespondido;
            
                console.log(`>${autorResposta}: ${conteudoResposta}`);
            } 
        }          
            console.log('__');
        });
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