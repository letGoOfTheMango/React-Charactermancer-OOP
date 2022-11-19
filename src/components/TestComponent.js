/* eslint-disable no-unused-vars */
import { /* useEffect, */ useRef } from "react";
import { useDispatch } from "react-redux";
import { charActions } from "../redux/slices/charSlice";
import { AbilityType } from "../scripts/enums";

const Test = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  // const [, set] = useState();
  const nameChangeHandler = () => {
    dispatch(charActions.changeName(inputRef.current.value));
  };
  const dexChangeHandler = () => {
    dispatch(charActions.changeAbilites({ ability: AbilityType.DEXTERITY, value: 2 }));
    dispatch(charActions.update());
  };
  return (
    <>
      <input ref={inputRef} type="text" onChange={nameChangeHandler}></input>
      <button onClick={dexChangeHandler}>+ 2 dex</button>
    </>
  );
};
export default Test;
