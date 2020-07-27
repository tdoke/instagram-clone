import Home from './home/';
import Profile from './profile/';
import Posts from './profile/Posts';
const routes: any[] = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/profile/:profileName",
    component: Profile,
    routes: [
      {
        path: "/profile/:profileName/posts",
        component: Posts
      }
    ]
  }
];

export default routes;
