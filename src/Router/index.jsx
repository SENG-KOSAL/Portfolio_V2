import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import About  from "../Page/About";
import Work from "../Page/Work";
import Project from "../Page/Project";
import Contact from "../Page/Contact";
const router = createBrowserRouter([
    {
        path: "/",
         element: <App />,
          children: [
            {
                path: "home",
                element: <Home />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "work",
                element: <Work />,
              },
              {
                path: "project",
                element: <Project />,
              },
              {
                path: "contact",
                element: <Contact />,
              },
              
        ],
    },
]);
export default router;