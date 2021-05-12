import { Routes } from "../utils/Routes";
import ArticlePage from "./ArticlePage/ArticlePage";
import { BlogsPage } from "./BlogsPage/BlogsPage";
import CreateArticlePage from "./CreateArticlePage/CreateArticlePage";
import GuidePage from "./GuidePage/GuidePage";
import IndexPage from "./IndexPage/IndexPage";
import BaseLayouts from "./_layouts/BaseLayouts";

const routes = [
  {
    path: "/",
    exact: true,
    component: BaseLayouts(IndexPage),
  },
  {
    path: "/blogs",
    exact: true,
    component: BaseLayouts(BlogsPage),
  },
  {
    path: `/blogs/create`,
    exact: true,
    component: BaseLayouts(CreateArticlePage),
  },
  {
    path: `/blogs/:id`,
    exact: true,
    component: BaseLayouts(ArticlePage),
  },
  {
    path: `/guide`,
    exact: true,
    component: BaseLayouts(GuidePage),
  },
];

const AppRoutes = Routes(routes);

export default AppRoutes;
