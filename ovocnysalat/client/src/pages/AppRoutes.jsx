import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

import CreateHuman from "./CreateHuman";
import CreatedHuman from "./CreatedHuman";
import PeopleList from "./PeopleList";
import Human from "./Human";


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-salad" element={<CreateHuman />} />
        <Route path="/created-salad/:id" element={<CreatedHuman />} />
        <Route path="/salads" element={<PeopleList />}/>
        <Route path="/Human/:id" element={<Human />}/>
    </Routes>
    </BrowserRouter>
  )
}
