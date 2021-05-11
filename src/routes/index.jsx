import { id } from "date-fns/locale";
import { Routes } from "../utils/Routes";
import ArticlePage from "./ArticlePage/ArticlePage";
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
  },
  {
    path: `/blogs/:id`,
    exact: true,
    component: BaseLayouts(ArticlePage)
  }
];

const AppRoutes = Routes(routes);

export default AppRoutes;
