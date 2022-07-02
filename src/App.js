
import './App.css';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App p-md-4 p-0">
     {/* <div className=' h-100 w-100 position-relative  '> */}
      <Layout>
        <MainPage></MainPage>
      </Layout>
     {/* </div> */}
    </div>
  );
}

export default App;
