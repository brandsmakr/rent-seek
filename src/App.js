import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/app.routes";

function App() {
  const appRoute = AppRoutes.map(({ Component, children }, index) => (
    <Route key={index} element={<Component />}>
      {children.map(({ path, Component }, indexer) => (
        <Route key={indexer} path={path} element={<Component />} />
      ))}
    </Route>
  ));

  return (
    <BrowserRouter>
      <Routes>{appRoute}</Routes>
    </BrowserRouter>
  );
}

export default App;
