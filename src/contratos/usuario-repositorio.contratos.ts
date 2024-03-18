import { Tweet } from "../modelos/tweet";
import { Usuario } from "../modelos/usuario";

export interface UsuarioRepositorio {
    criar: (novoUsuario: Usuario) => void;
    criarTweet: (novoTweet: Tweet, username: Usuario) => void;
    seguir: (usuario: Usuario, usuarioQuerSeguir: Usuario) => void;
}