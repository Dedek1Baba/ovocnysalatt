import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

import CreateHuman from "./CreateHuman";
import CreatedHuman from "./CreatedHuman";
import PeopleList from "./PeopleList";
import Human from "./Human";

import CreateProgrammer from "./CreateProgrammer";
import CreatedProgrammer from "./CreatedProgrammer";
import ProgrammersList from "./ProgrammersList";
import Programmer from "./Programmer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-human" element={<CreateHuman />} />
        <Route path="/created-human/:id" element={<CreatedHuman />} />
        <Route path="/people" element={<PeopleList />}/>
        <Route path="/Human/:id" element={<Human />}/>

        <Route path="/create-programmer" element={<CreateProgrammer />} />
        <Route path="/created-programmer/:id" element={<CreatedProgrammer />} />
        <Route path="/programmers" element={<ProgrammersList />}/>
        <Route path="/Programmer/:id" element={<Programmer />}/>
    </Routes>
    </BrowserRouter>
  )
}
