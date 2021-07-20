import { EditableCell } from "./EditableCell";


export const COLUMN = [
    {
        Header: 'Sl no.',
        accessor:'id', 
        Cell: EditableCell,  
    },
    {
        Header: "Plant",
        accessor: "plant",
        Cell: EditableCell,  
        
    },
    {
        Header: "Location of Use",
        accessor: "location_of_use",
        Cell: EditableCell,  
        
    },
    {
        Header: "Equipment Type",
        accessor: "equipment_type",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Equipment Desc",
        accessor: "equipment_desc",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Range",
        accessor: "range",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Desired Accuracy",
        accessor: "desired_accuracy",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Frequency (days)",
        accessor: "frequency",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Last Calibration Date (dd/mm/yyyy)",
        accessor: "last_calibration_date",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Next Due Date (dd/mm/yyyy)",
        accessor: "next_due_date",
        Cell: EditableCell,  
        
    }, 
    
    {
        Header: "Intimation Days",
        accessor: "intimation_days",
        Cell: EditableCell,  
        
    }, 
    {
        Header: "Status",
        accessor: "status",
        Cell: EditableCell,  
    }
]

export const GROUPED_COLUMNS=[
    {
        Header:' ',
        columns:[
            {
                Header: 'Sl no.',
                accessor:'id',   
            },
            {
                Header: "Plant",
                accessor: "plant",
                
            },
            {
                Header: "Location of Use",
                accessor: "location_of_use",
                
            },
        ],
    },
    {
        Header:'Equipment Details',
        columns:[
            {
                Header: "Equipment Type",
                accessor: "equipment_type",
                
            }, 
            {
                Header: "Equipment Desc",
                accessor: "equipment_desc",
                
            },
        ],
    },
    {
        Header:' ',
        columns:[
            {
                Header: "Range",
                accessor: "range",
                
            }, 
            {
                Header: "Desired Accuracy",
                accessor: "desired_accuracy",
                
            }, 
            {
                Header: "Frequency(days)",
                accessor: "frequency",
                
            }, 
        ],
    },
    {
        Header:'Dates',
        columns:[
            {
                Header: "Last Calibration Date",
                accessor: "last_calibration_date",
                
            }, 
            {
                Header: "Next Due Date",
                accessor: "next_due_date",
                
            },
        ],
    },
    {
        Header:' ',
        columns:[
            {
                Header: "Intimation Days",
                accessor: "intimation_days",
                
            }, 
            {
                Header: "Status",
                accessor: "status",
            }
        ],
    },
]