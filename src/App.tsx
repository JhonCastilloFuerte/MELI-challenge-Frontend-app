import { BrowserRouter } from "react-router-dom";
import './styles.scss'
import {AppRoutes} from './routers';
import {Header} from "./components";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
