import NowPlaying from "../views/pages/NowPlaying";
import Upcoming from "../views/pages/favorite";
import Detail from "../views/pages/detail";

const routes = {
  "/": NowPlaying, // default page
  "/now-playing": NowPlaying,
  "/upcoming": Upcoming,
  "/detail/:id": Detail,
};

export default routes;
