import { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SuspenseSpinner } from "./components/SuspenseSpinner";
import { store, persistor } from "./store";

ReactDOM.render(
  <Suspense fallback={<SuspenseSpinner />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
