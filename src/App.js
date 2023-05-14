import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Home,
  Products,
  Product,
  Checkout,
  Authentication,
  Profile,
  Private,
} from "./pages/index.page";
import { Navbar, Footer, Spinner } from "./components/index.component";
import Wrapper from "./index.styles";
import { useProductsContext } from "./contexts/ProductsContext";

const SharedLayout = () => {
  const { products } = useProductsContext();

  if (products.length <= 0) {
    return <Spinner size="large" />;
  }

  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: (
          <Private>
            <Checkout />
          </Private>
        ),
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile />
          </Private>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
