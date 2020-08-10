import Home from "./home/";
import Profile from "./profile/";
import Posts from "./profile/Posts";
import MyProfile from "./my-profile";
import AddPost from "./add-post";
import EditDetails from "./my-profile/EditDetails";
import ChangePass from "./my-profile/ChangePass";

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
    routes: [
      {
        path: "/user/profile/edit/details",
        component: EditDetails
      },
      {
        path: "/user/profile/edit/pwd",
        component: ChangePass
      }
    ]
  },
  {
    path: "/post/new",
    component: AddPost,
    exact: true
  }
];

export default routes;
