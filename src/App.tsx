import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages/page";
import { OtherPage } from "./pages/outher";

const router = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/other", element: <OtherPage></OtherPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
