import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Products, Product, Checkout } from "./pages/index.page";
import { Navbar, Footer } from "./components/index.component";
import Wrapper from "./index.styles";


const SharedLayout = () => {
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
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
