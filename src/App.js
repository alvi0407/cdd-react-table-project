import React, { useMemo, useState } from 'react'
import { Table } from './Components/Table'
import './App.css';
import { EditableCell } from './Components/EditableCell';
import { COLUMN } from './Components/column_s';
import MOCK_DATA from './Components/MOCK_DATA.json'


function App() {

  const columns = useMemo(() => COLUMN, [])
  const [data, setData] = useState(useMemo(() => MOCK_DATA, []));
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row;
      })
    );
  };



  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  const onAddRowClick = () => {
    setData(
      data.concat({id:'',plant:'',location_of_use:'',equipment_type:'',equipment_desc:'',range:'',desired_accuracy:'',frequency:'',last_calibration_date:'',next_due_date:'',intimation_days:'',status:''})
    );
  };


  return (
    <div>
      <h1 className='heading'>Equipment Master Data</h1>
      
            <button onClick={onAddRowClick} className="add-row-btn" >
                Add Row
                <span className='tooltip'>Go to last page</span>
            </button>
      <Table
        cols={columns}
        data_={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset} />
    </div>
  )
}

export default App
