import Shop from "../assets/js/components/Shop";
import { UserProvider } from "../assets/js/contexts/userContext";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Shop />
      </UserProvider>
    </div>
  );
}

export default App;
