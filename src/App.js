import React from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page1 from "./component/page1"
import Page2 from './component/page2';
import Page3 from './component/page3';
import Header from './component/header';
import "./App.css"
import Years from "./component/yearsControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from "./component/boot";
import Effect from "./component/effect";
import Alerttap from "./component/Alertfile";
import Todolist from "./component/Todolist";
import Slider from "./component/Slider";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path="/" element={<h1 className="apptitle">Application while learning</h1>} />
          <Route path='/Page1' element={<Page1/>} />
          <Route path='/Page2' element={<Page2/>} />
          <Route path='/Page3' element={<Page3/>} />
          <Route path='/bs' element={<Boot/>} />
          <Route path='/effect' element={<Effect/>} />
          <Route path='/redux' element={<Years/>} />
          <Route path='/alert' element={<Alerttap/>} />
          <Route path='/todolist' element={<Todolist/>} />
          <Route path='/slider' element={<Slider/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
