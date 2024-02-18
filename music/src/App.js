import './App.css';
import { LeftMenu } from './component/LeftMenu';
import { MainContainer } from './component/MainContainer';
import { RightMenu } from './component/RightMenu';

function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>
      <div className='background'>
        
      </div>
    </div>
  );
}

export default App;
