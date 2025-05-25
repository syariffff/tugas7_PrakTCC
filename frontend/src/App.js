import {BrowserRouter, Routes, Route} from "react-router-dom"
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import LoginPage from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="notes" element={<NoteList/>}/>
        <Route path="add" element={<AddNote />}/>
        <Route path="edit/:id" element={<EditNote/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
