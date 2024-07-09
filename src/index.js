import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import App from "./App";
import Cart from "./components/Cart";
import RestoMenu from "./components/RestoMenu";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
var appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Body /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:resId", element: <RestoMenu /> },
    ],
  },
]);
root.render(<RouterProvider router={appRoute} />);
