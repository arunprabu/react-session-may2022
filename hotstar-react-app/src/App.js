// App component
/*
  1. import statemenent
  2. comp defn 
      should return JSX 
  3. export 
*/

import Header from './components/shared/Header';
import Footer from './components/shared/Footer/Footer';
import './App.css'; // importing css  
import Home from './components/Home/Home';

// ideal place for us to have the layout 
function App() {

  // every comp should return JSX 
  return (
    <div>
      <Header></Header>

      <main className='mt-5'>
        <Home />
      </main>
      
      <Footer />
    </div>
  );
}

export default App; // exporting the App comp
