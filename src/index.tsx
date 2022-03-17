import { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SuspenseSpinner } from "./components/SuspenseSpinner";
import { store, persistor } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<SuspenseSpinner />}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Provider>
    </Suspense>
  </QueryClientProvider>,
  document.getElementById("root")
);
