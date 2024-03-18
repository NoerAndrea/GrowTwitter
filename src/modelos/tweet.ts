import { randomUUID } from "crypto"
import { Gostar } from "./gostar";

type Tipo = 'normal' | 'responder';

export class Tweet {
    private _idTweet: string = randomUUID(); 
    public gostar: Gostar[] = []   
    
    constructor(                
        public conteudo: string,       
        public tipo?: Tipo
        
    ){}    
    
    public get idTweet(): string{
        return this._idTweet
    }
}