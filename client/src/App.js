import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./routes/AppRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./app/context/UserProvider";
import { ProjectProvider } from "./app/context/ProjectProvider";
import { Provider } from "react-redux";
import store from "./app/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-right"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <UserProvider>
            <ProjectProvider>
              <AppRoute />
            </ProjectProvider>
          </UserProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
