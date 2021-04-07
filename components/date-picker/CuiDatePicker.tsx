import { FC, useState } from "react";

const CuiDatePicker: FC = () => {
  const [today, setToday] = useState(new Date());
  const [id, setId] = useState(`${Math.random() * 100000}`)

  return (
    <div>
      <label htmlFor={id}>Date Picker</label>
      <input type="date" id={id}/>
    </div>
  )
}

export default CuiDatePicker;