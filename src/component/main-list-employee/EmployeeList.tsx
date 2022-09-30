import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Chức Vụ</th>
            <th className="text-center">Phòng ban</th>
            <th className="text-center">Số điện thoại</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <EmployeeItem />
      </table>
    </div>
  );
};

export default EmployeeList;
