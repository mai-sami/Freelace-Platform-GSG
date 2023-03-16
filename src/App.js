import { Suspense } from "react";
import { useRoutes} from "react-router-dom";
 import ErrorBoundary from "./Components/organisms/ErrorBoundary/ErrorBoundary";
import { Containers } from "./Style/Layout";
import { router as routes } from "./Routes/routes";
import CircularProgress from "./Components/molecules/Spinners/CircularProgress";

function App() {
  const router = useRoutes(routes);
  return (
    <Containers>
      <Suspense fallback={<CircularProgress />}>
        <ErrorBoundary>
          {router}
         </ErrorBoundary>
      </Suspense>
    </Containers>
  )
}

export default App;
