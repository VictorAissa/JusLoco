import styled from "styled-components";

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #0000003f;
`;
const List = styled.ul`
    position: fixed;
    ${(props) => (props.direction === "down" ? "top: 0" : "bottom: 0")};
    ${(props) => (props.position === "left" ? "left: 1rem" : "right: 1rem")};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: #fff;
    z-index: 20;
    transform: ${(props) =>
        props.direction === "down" ? "translateY(-100%)" : "translateY(+100%)"};
    transition: transform 0.3s ease-in-out;
    &.open {
        transform: translateY(0);
    }
`;

function DropMenu({ children, isOpen, toggle, direction, position }) {
    return (
        <>
            {isOpen && (
                <Overlay className="header_overlay" onClick={toggle}></Overlay>
            )}
            <List
                className={`drop-menu_container ${isOpen ? "open" : ""}`}
                direction={direction}
                position={position}
            >
                {children}
            </List>
        </>
    );
}

export default DropMenu;
