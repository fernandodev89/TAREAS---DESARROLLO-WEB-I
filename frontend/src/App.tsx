import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateLink from './components/create_link';
import ShowLink from './components/show_link';
import ShowValue from './components/show_value';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/generateLink" element={<CreateLink/>}/>
        <Route path="/showLink" element={<ShowLink/>}/>
        <Route path="/showValue" element={<ShowValue/>}/>
      </Routes>
    </Router>
  )
}

export default App
