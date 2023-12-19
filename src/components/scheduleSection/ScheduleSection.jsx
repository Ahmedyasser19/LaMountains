import { useState } from "react";
import NavBarT2 from "../navBar/type2/NavBarT2";
import logo2 from "../../assets/logo/Logo2.jpg";
import "./scheduleSection.css";

const ScheduleSection = () => {
  const [tabState, setTabState] = useState(1);
  const toggleTab = (index) => {
    setTabState(index);
  };
  return (
    <section>
      <NavBarT2 tabIndex={toggleTab} tabState={tabState} />
      {/* Tab1 */}
      <div className={tabState == 1 ? "activeContent tab1" : "notActiveConten"}>
        <div className="schedule">
          <h3>SCHEDULE </h3>
          {/* Flexbox or table are fine, i will use table for fun, i love flexbox */}
          <table>
            <tr>
              <td>25Nov</td>
              <td>Vestibul</td>
            </tr>
            <tr>
              <td>26Nov</td>
              <td>Vestibul</td>
            </tr>
            <br />
            <tr>
              <td>28Nov</td>
              <td>Vestibul</td>
            </tr>
            <br />
            <tr>
              <td>25Nov</td>
              <td>Vestibul</td>
            </tr>
          </table>
        </div>
      </div>

      {/* Tab2 */}
      <div
        className={tabState == 2 ? "activeContent  tab2" : "notActiveConten"}
      >
        <div className="schedule">
          <h3>SCHEDULE </h3>
          {/* Flexbox or table are fine, i will use table for fun, i love flexbox */}
          <table>
            <tr>
              <td>1Des</td>
              <td>Vestibul</td>
            </tr>
            <br />
            <tr>
              <td>2Des</td>
              <td>Vestibul</td>
            </tr>
            <tr>
              <td>25Nov</td>
              <td>Vestibul</td>
            </tr>
            <br />
            <tr>
              <td>25Nov</td>
              <td>Vestibul</td>
            </tr>
          </table>
        </div>
      </div>

      <footer>
        <div className="footerCont">
          <img src={logo2} />
          <div>ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </section>
  );
};

export default ScheduleSection;
