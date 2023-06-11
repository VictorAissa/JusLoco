import "./index.scss";

function BurgerMenu({ toggle }) {
    return (
        <div className="burger_container" onClick={toggle}>
            <div className="burger_item"></div>
            <div className="burger_item"></div>
            <div className="burger_item"></div>
        </div>
    );
}

export default BurgerMenu;
