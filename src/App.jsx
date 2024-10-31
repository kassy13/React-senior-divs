import "./styles/mainstyle.css";

import Home from "./components/Home";
import Lists from "./components/Lists";
import Props from "./components/Props";
import aboutOne from "./assets/images/about_1.jpg";
import vite from "../public/vite.svg";
import {Bannerjs} from "./utils/Banner";
import Banner from "./components/Banner";
import Styles from "./components/Styles";
import Secondstyles from "./components/Secondstyles";
import COnditional from "./components/COnditional";
import Button from "./components/Button";
import Events from "./components/Events";
import StateOne from "./components/Hooks/Usestate/StateOne";
import StateTwo, {ExampleTwo} from "./components/Hooks/Usestate/StateTwo";
import StateThree from "./components/Hooks/Usestate/StateThree";
import Sidebar from "./components/Hooks/Usestate/Sidebar";
import StateFour from "./components/Hooks/Usestate/StateFour";
import EffectOne from "./components/Hooks/Use Effect/EffectOne";
import EffectTwo from "./components/Hooks/Use Effect/EffectTwo";
import ReducerOne from "./components/Hooks/Usereducer/ReducerOne";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextprovider from "./components/Hooks/Usecontext/UserContextprovider";
const App = () => {
  const istue = false;
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-slate-700">
        Hello world!
      </h1>
      <p className="flex flex-row">hekchvh</p>
      <h3 className={istue ? "hello" : ""}>hfhdhhhdh</h3>
      <Home />
      <Lists />
      <Props
        title="Kodex Build"
        text="Kodex Academy Provides an Extensive selection of courses covering full-stack web development, mobile app development, UI/UX design, and data analysis."
        link="Learn more"
        age={12}
        imgName={vite}
      />
      <Props
        title="Kodex Academy"
        text="Kodex Academyblkah blah blah."
        link="Learn mre from the academy page"
      />
      {Bannerjs.map((ban, index) => {
        return (
          <Banner
            text={ban.text}
            para={ban.para}
            imgName={ban.imgName}
            key={index}
          />
        );
      })}
      <Styles />
      <Secondstyles />
      <COnditional isValid={true} />
      <COnditional isValid={false} />
      <Button
        onClick={handleClick}
        className="bg-slate-950 text-white rounded p-1"
      >
        Click me !
      </Button>
      <Button />
      <Events />
      <StateOne />
      <StateTwo />
      <ExampleTwo />
      <StateThree />
      <Sidebar />
      <StateFour />
      <EffectOne />
      <EffectTwo />
      <ReducerOne />
      <UserContextprovider>
      <Login />
      <Profile />
      </UserContextprovider>
    </div>
  );
};

export default App;
