import logo from './logo.svg';
import './App.css';
import {MainMenu, StoryContainer} from './containers/index';
import { Link, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          
        </Route>
      
        <Route path="/Story" element={<StoryContainer />}>
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
