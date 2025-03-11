import './styles.css';
import cartIcon from '../../assets/cart.svg';

export default function HeaderClient() {
    return (
        <header className="ds-header-client">
            <nav className="dsc-container dsc-nav-client">
                <h1>Big Store</h1>
                <div className="nav-bar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={cartIcon} alt="Checkout" />
                        </div>
                    </div>
                    <div className="dsc-logged-user">
                        <a href="#">Login</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
