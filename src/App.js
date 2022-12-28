import Parent from './components/Parent.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'



function App() {
  
  return (
    <>
      <Router>
          <Routes>
            <Route
              path="/"
              element={<Parent />}
            >
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
