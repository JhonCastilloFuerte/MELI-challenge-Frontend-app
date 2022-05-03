import { Routes, Route} from "react-router-dom";
import { ProductsListView, ProductDetailsView } from "../views/pages";
import App from '../App';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="items" element={<ProductsListView />} />
      <Route path="items/:id" element={<ProductDetailsView />} />
    </Routes>
  )
}

export default AppRoutes