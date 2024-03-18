import { Tweet } from "../modelos/tweet";

export interface TweetRepositorio {
    gostar: ( username: string, mensagem: Tweet ) => void;
    mostrarGostar: () => void;
}