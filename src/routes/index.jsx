import { Routes } from "../utils/Routes";
import { BlogsPage } from "./BlogsPage/BlogsPage";
import IndexPage from "./IndexPage/IndexPage";
import BaseLayouts from "./_layouts/BaseLayouts";

const routes = [
  {
    path: "/",
    exact: true,
    component: BaseLayouts(IndexPage),
  },
  {
    path: '/blogs',
    exact: true,
    component: BaseLayouts(BlogsPage)
  }
];

const AppRoutes = Routes(routes);

export default AppRoutes;
