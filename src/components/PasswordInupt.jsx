import { useSelector, useDispatch } from "react-redux"
import { setMasked, setValue } from "../redux/input/inputSlice"

export default function PasswordInupt() {
  const dispatch = useDispatch();
  const masked = useSelector((state) => state.input.masked)
  const value = useSelector((state) => state.input.value)
  return (
    <div>
      <div>
        <input type={masked ? "password": "text"} value={value} onChange={(e) => dispatch(setValue(e.target.value))} /> 
          <button onClick={() => dispatch(setMasked(!masked))}>{masked ? "Show": "Hide"}</button>
      </div>
    </div>
  )
}
