import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import LoadingApp from "../layout/LoadingApp";

//  Features
import * as Features from "../../features";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      // For Development
      { path: "loading", element: <LoadingApp /> },

      // For Normal Use-Case
      /** User */
      {
        path: "auth/",
        element: <Features.User.AuthMain />,
        children: [
          { path: "login", element: <Features.User.LoginForm /> },
          { path: "register", element: <Features.User.RegisterForm /> },
          {
            path: "forgot-password",
            element: <Features.User.ForgotPasswordForm />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
