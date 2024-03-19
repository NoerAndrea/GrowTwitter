
import { usuarios } from "../banco/usuario.database";
import { UsuarioRepositorio } from "../contratos/usuario-repositorio.contratos";
import { Tweet } from "../modelos/tweet";
import { Usuario } from "../modelos/usuario";

export class UsuarioRepositorioEmMemoria implements UsuarioRepositorio {
    //criar usuario
    public criar(novoUsuario: Usuario): string | undefined{
        const existe = usuarios.some((usuario) => usuario.username === novoUsuario.username);

        if(existe){
            return 'Usuário já existe!'
        }
        usuarios.push(novoUsuario)
        return 
    }
    //criar tweet
    public criarTweet(novoTweet: Tweet, username: Usuario): string | undefined{
        const existeUsuario = usuarios.find(usuario => usuario.username === username.username);

        if(!existeUsuario){
            return 'Usuário não existe!';
        }else{
            existeUsuario.tweetsPorUsuario.push(novoTweet)
        }              
    }

    //seguir usuario
    public seguir(usuarioASerSeguido: Usuario, usuarioQuerSeguir: Usuario){
        if(usuarioASerSeguido === usuarioQuerSeguir){
            return;
        }
        usuarioASerSeguido.seguidos.push(usuarioQuerSeguir)
    }    
}