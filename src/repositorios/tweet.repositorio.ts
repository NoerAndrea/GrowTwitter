import { gostars } from "../banco/gostar.database";
import { TweetRepositorio } from "../contratos/tweet-repositorio.contratos";
import { Gostar } from "../modelos/gostar";
import { Tweet } from "../modelos/tweet";

export class TweetRepositorioEmMemoria implements TweetRepositorio{

    public gostar( nomeUsuario: string, mensagem: Tweet): number | undefined {
            const novoGostar = new Gostar(nomeUsuario,mensagem)
            gostars.push(novoGostar)
            return 
    }  
    

    public pegarCurtidas(): number{
        return gostars.length
    }

    public mostrarGostar() {
        const curtidas = this.pegarCurtidas()

        if(curtidas === 0){
            return ''
        }
        if(curtidas === 1){
            return `[@${gostars[0].username} curtiu]`
        }else{
            return `[@${gostars[curtidas - 1].username} mais ${curtidas - 1} curtiram.]`
        }        
    }
}

