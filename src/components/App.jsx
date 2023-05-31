import { useSelector, useDispatch } from 'react-redux'
import {update, getClicksValue} from "redux/clicksSlice";

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicksValue)
  

  
  return (
    <div>
      <h1>Number of clicks: {numberOfClicks}</h1>
      <button
        onClick={()=>dispatch(update(5)) }
        type="button">
        Add 5 clicks
      </button>
      <button
        onClick={()=>dispatch(update(10)) }
        type="button">
        Add 10 clicks
      </button>
      <button
        onClick={()=>dispatch(update(15)) }
        type="button">
        Add 15 clicks
      </button>
    </div>
  );
};
