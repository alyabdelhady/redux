import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/Feture/studentReducer";


function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  useEffect(() => {
    
  dispatch(addUser(student))
  }, [dispatch])
  

  return (
    <div className="App">
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>{count}</p>
    </div>
  );
}

export default App;
