import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../App.css";
import { Route as AboutRoute } from "./about";
import { Route as HomeRoute } from "./index";
import { Route as PostsIndexRoute } from "./posts/index";
import logo from "../logo.svg";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Link className="App-link" to={HomeRoute.to}>
              Go to Home
            </Link>
            <Link className="App-link" to={AboutRoute.to}>
              Go to About
            </Link>
            <Link className="App-link" to={PostsIndexRoute.to}>
              Go to Posts
            </Link>
          </div>
          <Outlet />
        </header>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
