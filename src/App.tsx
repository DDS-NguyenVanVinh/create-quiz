import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../src/";
import FormEmployee from "./component/FormEmployee";
import Control from "./component/main-list-employee/Control";
import EmployeeList from "./component/main-list-employee/EmployeeList";
import Employee from "./interface/type";
import { setEmployee } from "./redux/action";
import { getDataSourceEmployee } from "./redux/selection";

function App() {
  const dispatch = useDispatch();

  const dataSourceEmployee = useSelector(getDataSourceEmployee);

  const [isOpenFormEmployee, setIsOpenFormEmployee] = useState(false);

  const handleSubmitForm = (data: Employee) => {
    const newDataSourceEmployee = [...dataSourceEmployee, data];
    dispatch(setEmployee(newDataSourceEmployee));
  };

  return (
    <>
      <EmployeeList />
      {isOpenFormEmployee && <FormEmployee onSubmitForm={handleSubmitForm} />}
      <Control />
    </>
  );
}

export default App;

const MOCK_DATA = [
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
