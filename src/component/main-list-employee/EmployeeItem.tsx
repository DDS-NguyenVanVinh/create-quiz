import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../../redux/action";
import { getDataSourceEmployee } from "../../redux/selection";

const EmployeeItem = () => {
  const dispatch = useDispatch();
  const dataSourceEmployee = useSelector(getDataSourceEmployee);

  const handleDeleteEmployee = (id: number) => {
    const newDataSourceEmployee = dataSourceEmployee.filter((_, index) => {
      return index !== id;
    });
    dispatch(setEmployee(newDataSourceEmployee));
  };

  // const handleModifyEmployee = (id: number) => {
  //   const newDataSourceEmployee = dataSourceEmployee.map((item, index) => {
  //     if (index === id) {
  //       return {};
  //     }
  //   });
  //   dispatch(setEmployee(newDataSourceEmployee));
  // };

  console.log("dataSourceEmployee", dataSourceEmployee);
  return (
    <thead>
      {dataSourceEmployee.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.department}</td>
            <td>{item.phoneNumber}</td>
            <td className="text-center">
              <button
                // onClick={onOpenFormEmployee}
                type="button"
                className="btn btn-success"
              >
                Sửa
              </button>
              &nbsp;
              <button
                onClick={() => {
                  handleDeleteEmployee(index);
                }}
                type="button"
                className="btn btn-danger"
              >
                <span className="fa fa-trash mr-5"></span>Xóa
              </button>
            </td>
          </tr>
        );
      })}
    </thead>
  );
};

export default EmployeeItem;
