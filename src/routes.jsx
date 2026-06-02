import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import UserList from "./pages/users/UserList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
