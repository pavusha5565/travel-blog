import { Routes } from "../utils/Routes";
import IndexPage from "./IndexPage/IndexPage";
import BaseLayouts from "./_layouts/BaseLayouts";

const routes = [
  {
    path: "/",
    exact: true,
    component: BaseLayouts(IndexPage),
  },
];

const AppRoutes = Routes(routes);

export default AppRoutes;
