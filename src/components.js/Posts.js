export default function Posts() {
    return (
        <div class="posts">

            {postList.map(item =>
                < div class="post" >

                    <div class="topo">
                        <div class="usuario">
                            <img src={item.topo.usuario.imagem} alt={item.topo.usuario.alt} />
                            {item.topo.usuario.texto}
                        </div>
                        <div class="acoes">
                            <ion-icon name={item.topo.acoes.icon}></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={item.conteudo.imagem} alt={item.conteudo.alt} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name={item.fundo.acoes.icon1}></ion-icon>
                                <ion-icon name={item.fundo.acoes.icon2}></ion-icon>
                                <ion-icon name={item.fundo.acoes.icon3}></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src={item.fundo.curtidas.imagem} alt={item.fundo.curtidas.alt} />
                            <div class="texto">
                                Curtido por <strong>{item.fundo.curtidas.texto.usuario}</strong> e <strong>{item.fundo.curtidas.texto.pessoas}</strong>
                            </div>
                        </div>
                    </div>
                </div >
            )}
{/*             <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" alt="meowed" />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" alt="meowed" />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" alt="barked" />
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src="assets/img/dog.svg" alt="dog" />
                </div>
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}


const postList = [
    {
        topo:
        {
            usuario:
            {
                imagem: "assets/img/meowed.svg",
                alt: "meowed",
                texto: "meowed",
            },
            acoes:
            {
                icon: "ellipsis-horizontal"
            },
        },
        conteudo:
        {
            imagem: "assets/img/gato-telefone.svg",
            alt: "gato-telefone"
        },
        fundo:
        {
            acoes:
            {
                icon1: "heart-outline",
                icon2: "chatbubble-outline",
                icon3: "paper-plane-outline",
            },
            curtidas:
            {
                imagem: "assets/img/respondeai.svg",
                alt: "respondeai",
                texto:
                {
                    usuario: "respondeai",
                    pessoas: "outras 101.523 pessoas"
                }
            }
        },
    },
    {
        topo:
        {
            usuario:
            {
                imagem: "assets/img/dog.svg",
                alt: "barked",
                texto: "barked"
            },
            acoes:
            {
                icon: "ellipsis-horizontal"
            }
        },
        conteudo:
        {
            imagem: "assets/img/dog.svg",
            alt: "dog"
        },
        fundo:
        {
            acoes:
            {
                icon1: "heart-outline",
                icon2: "chatbubble-outline",
                icon3: "paper-plane-outline",
            },
            curtidas:
            {
                imagem: "assets/img/adorable_animals.svg",
                alt: "adorable_animals",
                texto:
                {
                    usuario: "adorable_animals",
                    pessoas: "outras 99.159 pessoas"
                }
            }
        },
    },
    {
        topo:
        {
            usuario:
            {
                imagem: "assets/img/meowed.svg",
                alt: "meowed",
                texto: "meowed",
            },
            acoes:
            {
                icon: "ellipsis-horizontal"
            },
        },
        conteudo:
        {
            imagem: "assets/img/gato-telefone.svg",
            alt: "gato-telefone"
        },
        fundo:
        {
            acoes:
            {
                icon1: "heart-outline",
                icon2: "chatbubble-outline",
                icon3: "paper-plane-outline",
            },
            curtidas:
            {
                imagem: "assets/img/respondeai.svg",
                alt: "respondeai",
                texto:
                {
                    usuario: "respondeai",
                    pessoas: "outras 101.523 pessoas"
                }
            }
        }
    }
]


/*     < div class="post" >   
<div class="topo">   
    <div class="usuario">   
        <img src={item.topo.usuario.imagem} alt=item.topo.usuario.alt />   
        {item.topo.usuario.texto}  
    </div>   
    <div class="acoes">   
        <ion-icon name={item.topo.acoes.icon}></ion-icon>   
    </div>   
</div>   

<div class="conteudo">   
    <img src={item.conteudo.imagem} alt={item.conteudo.alt} />   
</div>   

<div class="fundo">   
    <div class="acoes">   
        <div>   
            <ion-icon name={item.fundo.acoes.icon1}></ion-icon>   
            <ion-icon name={item.fundo.acoes.icon2}></ion-icon>   
            <ion-icon name={item.fundo.acoes.icon3}></ion-icon>   
        </div>   
        <div>   
            <ion-icon name="bookmark-outline"></ion-icon>   
        </div>   
    </div>   
    <div class="curtidas">   
        <img src={item.fundo.curtidas.imagem} alt={item.fundo.curtidas.alt} />   
        <div class="texto">   
            Curtido por <strong>{item.fundo.curtidas.texto.usuario}</strong> e <strong>{item.fundo.curtidas.texto.pessoas}</strong>   
        </div>   
    </div>   
</div>   
</div > */


