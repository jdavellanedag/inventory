import {RouterProvider} from "react-router-dom";
import {DataProvider} from "./context/DataContext.jsx";
import router from "./routes/Router.jsx";

const App = () => {

  return (
      <>
          <DataProvider>
              <RouterProvider router={router}/>
          </DataProvider>
      </>
  )
}

export default App
