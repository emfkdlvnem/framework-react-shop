import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
                <h1>
                    <Link to="/">물빠진 청바지 헤더</Link>
                </h1>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link to="/fasion">패션</Link>
                        </li>
                        <li>
                            <Link to="/accessory">액세서리</Link>
                        </li>
                        <li>
                            <Link to="/digital">디지털</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header