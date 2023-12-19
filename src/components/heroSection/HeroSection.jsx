import "./heroSection.css";
import NavBarT1 from "../navBar/type1/NavBarT1";
const HeroSection = () => {
  return (
    <section className="Hero">
      <main>
        <NavBarT1 logo={1} textColor={1} />
        <h1 className="logoName">
          <span className="LA">LOSANGELES</span> MAOUNTAINS
        </h1>
      </main>
    </section>
  );
};

export default HeroSection;
