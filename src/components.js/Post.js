import { useState } from "react";

export default function Post(){

    const [bookmarkIcon, setBookmarkIcon] = useState("bookmark-outline");
    const [heartIcon, setHeartIcon] = useState("heart-outline");
    const [heartClass, setHeartClass] = useState("heart-black");


    const changeSave = (iconName) => {
        if (iconName === "bookmark") {
            setBookmarkIcon(bookmarkIcon === "bookmark-outline" ? "bookmark" : "bookmark-outline");
        }
    };

    const changeLike = () => {
        if (heartIcon === "heart-outline" && heartClass === "heart-black") {
            setHeartIcon("heart");
            setHeartClass("heart-red");// adiciona a classe CSS dinamicamente
            
        } else {
            setHeartIcon("heart-outline");
            setHeartClass("heart-black") // remove a classe CSS
        }
    };
    const imageClick = () => {
        setHeartIcon("heart");
        setHeartClass("heart-red");
    };

    return(
        postList.map(item =>
            < div data-test="post" class="post" >
        
                <div class="topo">
                    <div class="usuario">
                        <img src={item.topo.usuario.imagem} alt={item.topo.usuario.alt} />
                        {item.topo.usuario.texto}
        
                    </div>
                    <div class="acoes">
                        <ion-icon name={item.topo.acoes.icon}></ion-icon>
                    </div>
                </div>
        
                <div  class="conteudo">
                    <img data-test="post-image" onClick={imageClick} src={item.conteudo.imagem} alt={item.conteudo.alt} />
                </div>
        
                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <span className={heartClass} ><ion-icon data-test="like-post" name={heartIcon} onClick={() => changeLike("heart")} ></ion-icon></span>
                            <ion-icon name={item.fundo.acoes.icon2}></ion-icon>
                            <ion-icon name={item.fundo.acoes.icon3}></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" name={bookmarkIcon} onClick={() => changeSave("bookmark")}></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={item.fundo.curtidas.imagem} alt={item.fundo.curtidas.alt} />
                        <div class="texto">
                            Curtido por <strong>{item.fundo.curtidas.texto.usuario}</strong> e <strong test="likes-number">outras {item.fundo.curtidas.texto.pessoas } pessoas</strong>
                        </div>
                    </div>
                </div>
            </div >
            
        )
    )
}





const postList = [
    {
        id: 1,
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
                heartIcon: { // Adiciona o ID ao ícone "heart-outline"
                    id: "heart-icon",
                    icon: "heart-outline",
                },
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
                    pessoas: 101.523
                }
            }
        },
    },
    {
        id: 2,
        topo:
        {
            usuario:
            {
                imagem: "assets/img/barked.svg",
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
                heartIcon: { // Adiciona o ID ao ícone "heart-outline"
                    id: "heart-icon",
                    icon: "heart-outline",
                },
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
                    pessoas: 99.159
                }
            }
        },
    },
    {
        id: 3,
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
                heartIcon: { // Adiciona o ID ao ícone "heart-outline"
                    id: "heart-icon",
                    icon: "heart-outline",
                },
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
                    pessoas: 101.523
                }
            }
        }
    }
]