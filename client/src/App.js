import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home, Products, Product } from "./pages/index.page";
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
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
