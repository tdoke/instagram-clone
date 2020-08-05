import Home from "./home/";
import Profile from "./profile/";
import Posts from "./profile/Posts";
import MyProfile from "./my-profile";
import AddPost from "./add-post";
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
    ],
  },
  {
    path: "/user/profile/edit",
    component: MyProfile,
    exact: true
  },
  {
    path: "/post/new",
    component: AddPost,
    exact: true
  }
];

export default routes;
