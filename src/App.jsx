import { ToastContainer } from "react-toastify";
import App_Router from "./routes/App_Router";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <App_Router />
    </>
  );
}

export default App;
