import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Spinner from "./Components/molecules/Spinners/Spinners";
import ErrorBoundary from "./Components/organisms/ErrorBoundary/ErrorBoundary";
import { Container } from "./Style/Layout";
import { router as routes } from "./Routes/ProtectedRoutes/HomeProtected";

function App() {
  const router = useRoutes(routes);
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          {router}
        </ErrorBoundary>
      </Suspense>

    </Container>
  )
}

export default App;
