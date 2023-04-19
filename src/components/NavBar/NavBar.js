import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return( <nav>
        <h3>Bison Sport</h3>

        <div>
            <button>Adidas</button>
            <button>Trow</button>
            <button>Clan</button>
            <button>Femme</button>
        </div>

        <CartWidget />
    </nav>

    )
}
 export default NavBar