import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Spinner from "./Components/molecules/Spinners/Spinners";
import ErrorBoundary from "./Components/organisms/ErrorBoundary/ErrorBoundary";
import { Containers } from "./Style/Layout";
import { router as routes } from "./Routes/routes";

function App() {
  const router = useRoutes(routes);
  return (
    <Containers>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          {router}
        </ErrorBoundary>
      </Suspense>

    </Containers>
  )
}

export default App;
