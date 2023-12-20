import {RouterProvider} from "react-router-dom";
import router from "./routes/Router.jsx";

const App = () => {

  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default App
