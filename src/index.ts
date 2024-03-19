import { Tweet } from "./modelos/tweet";
import { Usuario } from "./modelos/usuario"
import { TweetRepositorioEmMemoria } from "./repositorios/tweet.repositorio";
import { UsuarioRepositorioEmMemoria } from "./repositorios/usuario.repositorio";


const usuarioLista = new UsuarioRepositorioEmMemoria();
const tweetLista = new TweetRepositorioEmMemoria();


//criação de usuário
const siclano: Usuario = new Usuario('Siclano', 'siclano@email.com', 'siclano', '123456');
const beltrano: Usuario = new Usuario('Beltrano', 'beltrano@email.com', 'beltrano', '123456');
const fulano: Usuario = new Usuario('Fulano', 'fulano@email.com', 'fulano', '123456');

//erro - mesmo Username
const meiaNoite: Usuario = new Usuario('Meia Noite', 'meianoite@email.com', 'fulano', '123456');

//adicionar usuarios no banco de dados
usuarioLista.criar(siclano);
usuarioLista.criar(beltrano);
usuarioLista.criar(fulano);

//erro - mesmo Username
console.log('----------------');
console.log(usuarioLista.criar(meiaNoite));

//criar tweet
console.log('----------------');
const tweet1: Tweet = new Tweet( 'Oi', 'normal' );
const tweet2: Tweet = new Tweet( 'Oi GrowTweeter!','responder');
const tweet3: Tweet = new Tweet( 'GrowTweeter!','responder');
const tweet4: Tweet = new Tweet( 'GrowTweeter é lindo!','normal');
const tweet5: Tweet = new Tweet( 'Adorável GrowTweeter!','normal');

usuarioLista.criarTweet(tweet1, siclano)
usuarioLista.criarTweet(tweet2, siclano)
usuarioLista.criarTweet(tweet3, fulano)
usuarioLista.criarTweet(tweet4, fulano)
usuarioLista.criarTweet(tweet5, beltrano)

//gostar
tweetLista.gostar('siclano', tweet1);
tweetLista.gostar('beltrano', tweet1);
tweetLista.gostar('fulano', tweet1);

tweetLista.gostar('beltrano', tweet2);
tweetLista.gostar('fulano', tweet2);

tweetLista.gostar('beltrano', tweet3);
tweetLista.gostar('beltrano', tweet4);


//resposta
tweetLista.adicionarResposta(fulano, 'Oi', tweet1)

tweetLista.adicionarResposta(fulano, 'Oi', tweet2)

tweetLista.adicionarResposta(beltrano, 'Oi', tweet2)

tweetLista.adicionarResposta(beltrano, 'Rede Social', tweet3)
tweetLista.adicionarResposta(siclano, 'Hello World', tweet3)
tweetLista.adicionarResposta(fulano, 'Todos conectados!', tweet3)

//seguir
usuarioLista.seguir(siclano, fulano)
usuarioLista.seguir(siclano, beltrano)

usuarioLista.seguir(siclano, siclano)

usuarioLista.seguir(fulano, siclano)
usuarioLista.seguir(fulano, beltrano)


//mostrar tweets
siclano.mostraTweet();

fulano.mostraTweet()

beltrano.mostraTweet();

//mostrar perfil
siclano.mostraPerfil();

