
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import RollingDice from "./components/RollingDice"
library.add(fas)


function App() {
  return (
    <div className="App">
     <RollingDice/>
    </div>
  );
}

export default App;
