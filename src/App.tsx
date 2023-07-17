import { Header } from "./components/common/Header";
import { MainPage } from "./components/pages/MainPage";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./defs/theme";

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
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
