
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
        return 'Usuário criado com sucesso!'
    }
    //criar tweet
    public criarTweet(novoTweet: Tweet, username: Usuario): void{
        const existeUsuario = usuarios.find(usuario => usuario.username === username.username);

        if(!existeUsuario){
            console.log('Usuário não existe!');
        }else{
            existeUsuario.tweetsPorUsuario.push(novoTweet)
            console.log(`Tweet criado com sucesso @${existeUsuario.username}!`)
        }              
    }

    //seguir usuario
    public seguir(usuarioASerSeguido: Usuario, usuarioQuerSeguir: Usuario){
        if(usuarioASerSeguido === usuarioQuerSeguir){
            console.log('Usuário não pode se seguir.');
            return;
        }
        usuarioASerSeguido.seguidos.push(usuarioQuerSeguir.username)
        
        console.log(`${usuarioASerSeguido.username} é seguido ${usuarioQuerSeguir.username}`)
        console.log('_____________')
    }    
}