import { Header } from "./components/common/Header";
import { MainPage } from "./components/pages/MainPage";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
]);

function App() {
  // TODO add routing
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
