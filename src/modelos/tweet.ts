import { randomUUID } from "crypto"
import { Gostar } from "./gostar";
import { Resposta } from "./resposta";

type Tipo = 'normal' | 'responder';

export class Tweet {
    private _idTweet: string = randomUUID(); 
    public gostar: Gostar[] = [];   
    public resposta: Resposta[] = [];
    
    constructor(                
        public conteudo: string,       
        public tipo?: Tipo
        
    ){}    
    
    public get idTweet(): string{
        return this._idTweet
    }
}