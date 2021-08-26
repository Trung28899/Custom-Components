import ModalScreen from "./screen/ModalScreen/ModalScreen";
import YoutubeEmbedded from "./screen/YoutubeEmebeddedScreen/YoutubeEmbedded";
import DropDownScreen from "./screen/DropDownLinkScreen/DropDown";
import Analytic from "./screen/Analytic/Analytic";
import TikTok from "./screen/TikTokEmbed/TikTok";
import BottomNav from "./screen/BottomNav/BottomNav";
import Charts from "./screen/Charts/Charts";
import { Route, Switch } from "react-router-dom";
import InstagramScreen from "./screen/InstagramEmbed/Insta";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Switch>
        <Route path="/analytic" component={Analytic} />
        <Route path="/drop" component={DropDownScreen} />
        <Route path="/tiktok" component={TikTok} />
        <Route path="/embedded" component={YoutubeEmbedded} />
        <Route path="/instagram" component={InstagramScreen} />
        <Route path="/nav" component={BottomNav} />
        <Route path="/charts" component={Charts} />
        <Route path="/" exact component={ModalScreen} />
      </Switch>
    </div>
  );
}

export default App;
