import IonIcon from "./IonIcon";

export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>
    );
}

function Logo(){
    return(
        <div class="logo">
            <IonIcon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function LogoMobile(){
    return(
        <div class="logo-mobile">
            <IonIcon name="logo-instagram" />
        </div>
    );
}

function InstagramMobile(){
    return(
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    );
}

function Pesquisa(){
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icones (){
    return(
        <div class="icones">
            <IonIcon name="paper-plane-outline" />
            <IonIcon name="compass-outline" />
            <IonIcon name="heart-outline" />
            <IonIcon name="person-outline" />
        </div>
    );
}

function IconesMobile(){
    return(
        <div class="icones-mobile">
            <IonIcon name="paper-plane-outline" />
        </div>
    );
}