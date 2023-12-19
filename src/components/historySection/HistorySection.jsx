import Carousel from "../carousel/Carousel";
import "./historySection.css";

const HistorySection = () => {
  return (
    <>
      <section className="historySection">
        <div className="flexContainer ">
          <main>
            <div className="title">
              <span className="numbers">01</span>
              <span className="square">■</span>

              <div className="titleTitle">History</div>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint
              culpa iusto! Sunt iusto eveniet suscipit, veniam vitae provident
              saepe harum illum beatae illo deserunt impedit optio sapiente
              esse, expedita fuga commodi perspiciatis.
            </p>
          </main>
          <Carousel />
        </div>
      </section>
      <section>
        <main className="historyFlex">
          <div className="flexContainer2">
            <span className="numbers">02</span>
            <span className="square">■</span>

            <div className="titleTitle2 ">Climb</div>
          </div>
          <p className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint
            culpa iusto! Sunt iusto eveniet suscipit, veniam vitae provident
            saepe harum illum beatae illo deserunt impedit optio sapiente esse,
            expedita fuga commodi perspiciatis.
          </p>
        </main>
      </section>
    </>
  );
};

export default HistorySection;
