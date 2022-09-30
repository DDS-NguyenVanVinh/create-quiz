import { combineReducers } from "redux";

const initState =
    [
        {
            name: "Nguyễn Văn Nam",
            position: "Tổng giám dốc",
            department: "IT",
            phoneNumber: "0965236987",
        },
        {
            name: "Nguyễn Văn Minh",
            position: "giám dốc",
            department: "IT",
            phoneNumber: "0965236987",
        },
        {
            name: "Quế Ngọc Hải",
            position: "Leader",
            department: "Marketing",
            phoneNumber: "0965236987",
        },
        {
            name: "Bùi Tiến Dũng",
            position: "Nhân viên",
            department: "Hành chính",
            phoneNumber: "0965236987",
        },
    ];

const employeeReducerFunc = (state: any = initState, action: any) => {
    switch (action.type) {
        case "setEmployee":
            return action.payload
        default:
            return state
    }
}


const rootReducer = combineReducers({ employeeReducerFunc })

export default rootReducer