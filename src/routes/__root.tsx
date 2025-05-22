import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../App.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="app-header center">Header</div>
      <div className="app-body"></div>
      <Outlet />
      <div className="app-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
