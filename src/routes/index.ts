import Home from './home/';
import Profile from './profile/';
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/profile/:profileName",
    exact: true,
    component: Profile
  }
];

export default routes;
