
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App p-md-4 p-0">
     {/* <div className=' h-100 w-100 position-relative  '> */}
      <Layout>
        <HomePage></HomePage>
      </Layout>
     {/* </div> */}
    </div>
  );
}

export default App;
