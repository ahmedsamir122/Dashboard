import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import NewUser from "./pages/NewUser";
import SingleProduct from "./pages/SingleProduct";
import SingleUser from "./pages/SingleUser";
import RootLayout from "./component/root/RootLayout";
import NewProduct from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <SingleProduct /> },
      { path: "/products/newproduct", element: <NewProduct /> },
      { path: "/users", element: <Users /> },
      { path: "/users/newuser", element: <NewUser /> },
      { path: "/users/:userId", element: <SingleUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
