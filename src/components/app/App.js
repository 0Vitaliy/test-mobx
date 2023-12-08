import { Users } from '../../pages/users/users';
import { Provider } from '../../models';
import './App.css';

function App() {
  return (
    <Provider>
      <Users />
    </Provider>
  );
}

export default App;
