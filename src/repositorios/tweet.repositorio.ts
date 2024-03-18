import { gostars } from "../banco/gostar.database";
import { TweetRepositorio } from "../contratos/tweet-repositorio.contratos";
import { Gostar } from "../modelos/gostar";
import { Tweet } from "../modelos/tweet";

export class TweetRepositorioEmMemoria implements TweetRepositorio{

    public gostar( nomeUsuario: string, mensagem: Tweet): number | undefined {
            const novoGostar = new Gostar(nomeUsuario,mensagem)
            mensagem.gostar.push(novoGostar)
            return 
    }  

    public adicionarResposta(conteudo:Tweet){
        
    }
}

