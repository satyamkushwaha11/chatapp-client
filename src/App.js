import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import publicRoutes from "./routes/public_routes";
import Index from "./pages";
import PrivateRouting from "./HOC/PrivateRouting";
import { useEffect } from "react";

function App() {
  // useEffect(()=>{

  //   publicRoutes.map((item, index) =>{
  //     console.log( 'd')
  //   }
  //   )
  // },[]);

  return (
    <div className="App bg-red">
      <BrowserRouter>
        <Routes>
          {publicRoutes &&
            publicRoutes.length &&
            publicRoutes.map(({ component: Cmp, ...route }, index) => (
              <Route
                key={index}
                {...route}
                //   element={() => <Cmp />}
                element={<Cmp />}
              />
            ))}
          <Route
            path="/"
            element={
              // <PrivateRouting>
              <Index />
              // </PrivateRouting>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
