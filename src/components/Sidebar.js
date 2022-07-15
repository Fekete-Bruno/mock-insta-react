const suggestions = [
    {name:"bad.vibes.memes", img:"assets/img/bad.vibes.memes.svg", reason:"Segue você"},
    {name:"chibirdart", img:"assets/img/chibirdart.svg", reason:"Segue você"},
    {name:"razoesparaacreditar", img:"assets/img/razoesparaacreditar.svg", reason:"Novo no Instagram"},
    {name:"adorable_animals", img:"assets/img/adorable_animals.svg", reason:"Segue você"},
    {name:"smallcutecats", img:"assets/img/smallcutecats.svg", reason:"Segue você"},
]

export default function Sidebar(){
    return(
        <div class="sidebar">

            <User userName="catanacomics" img="assets/img/catanacomics.svg" realName="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
                    
        </div>
    )
}

function User(props){
    return(
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.realName}
            </div>
        </div>
    )
}

function Sugestoes(){
    return(
        <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestions.map(user => 
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={user.img} />
                            <div class="texto">
                                <div class="nome">{user.name}</div>
                                <div class="razao">{user.reason}</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                )}

            </div>
    )
}

function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}