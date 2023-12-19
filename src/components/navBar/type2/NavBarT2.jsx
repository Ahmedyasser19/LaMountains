import "./navBarT2.css";

const NavBarT2 = ({ tabIndex, tabState }) => {
  return (
    <nav className="navContainer">
      <ul className="nav2">
        <li
          className={tabState === 1 ? "activeTab" : ""}
          onClick={() => {
            tabIndex(1);
          }}
        >
          MOUNTAIN 1
        </li>
        <li
          className={tabState === 2 ? "activeTab" : ""}
          onClick={() => {
            tabIndex(2);
          }}
        >
          MOUNTAIN 2
        </li>
      </ul>
    </nav>
  );
};

export default NavBarT2;
