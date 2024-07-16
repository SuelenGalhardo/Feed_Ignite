
import logo from "../assets/logoHeader.svg";


export function Header () {

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo Header" />
            <h1 className="header__title">Feed Ignite</h1>
        </header>
    )
}