import { Tweet } from "../modelos/tweet";
import { Usuario } from "../modelos/usuario";

export interface TweetRepositorio {
    gostar: ( username: string, mensagem: Tweet ) => void;
    adicionarResposta: (autor: Usuario, conteudo: string, tweet: Tweet) => void;
}