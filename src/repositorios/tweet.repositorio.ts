import { TweetRepositorio } from "../contratos/tweet-repositorio.contratos";
import { Gostar } from "../modelos/gostar";
import { Resposta } from "../modelos/resposta";
import { Tweet } from "../modelos/tweet";
import { Usuario } from "../modelos/usuario";

export class TweetRepositorioEmMemoria implements TweetRepositorio{

    public gostar( nomeUsuario: string, mensagem: Tweet): number | undefined {
            const novoGostar = new Gostar(nomeUsuario,mensagem)
            mensagem.gostar.push(novoGostar)
            return 
    }  

    public adicionarResposta(autor: Usuario, conteudo: string, tweet: Tweet){
        const novaResposta = new Resposta(tweet, conteudo, autor)
        
        const tipo = tweet.tipo
        if(tipo === 'responder'){
            tweet.resposta.push(novaResposta)
        }        
        return 'Este Tweet não pode ser respondido.'
    }
}


