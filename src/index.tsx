import { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SuspenseSpinner } from "./components/SuspenseSpinner";
import { store, persistor } from "./store";
// import { createServer, Model } from "miragejs";

// createServer({
//   models: {
//     user: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       user: [
//         {
//           id: 14,
//           firstName: "Leonardo",
//           lastName: "Juriolli",
//           email: "leojuriolli@gmail.com",
//         },
//       ],
//     });
//   },

//   routes() {
//     this.namespace = "api";

//     // this.post("user/auth", (schema) => {
//     //   const token = jwt.sign({}, "shhhhh");

//     //   return
//     // });
//   },
// });

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
