import { useState } from "react";

const Control = () => {
  const [valueSearch, setValueSearch] = useState("");

  const handleSortPosition = (value: string) => {
    alert(value);
  };

  const handleSearchNameAndPhoneNumber = () => {
    console.log(valueSearch);
  };

  const handleChangeValueSearch = (value: string) => {
    setValueSearch(value);
  };

  return (
    <div className="row mt-15">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          // onClick={}
          type="button"
          className="btn btn-primary"
          style={{ marginBottom: "16px" }}
        >
          <span className="fa fa-plus mr-5"></span>Thêm Nhân Viên
        </button>
        <div className="input-group">
          <input
            onChange={(e) => handleChangeValueSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
          />
          <span className="input-group-btn">
            <button
              onClick={handleSearchNameAndPhoneNumber}
              className="btn btn-primary"
              type="button"
            >
              <span className="fa fa-search mr-5"></span>Tìm
            </button>
          </span>
        </div>
      </div>
      <div
        className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
        style={{ display: "flex" }}
      >
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Lọc Chức Vụ <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li
              onClick={(event: any) =>
                handleSortPosition(event.target.firstChild.data)
              }
            >
              <a role="button">Tổng giám đốc</a>
            </li>
            <li
              onClick={(event: any) =>
                handleSortPosition(event.target.firstChild.data)
              }
            >
              <a role="button">Giám đốc</a>
            </li>
            <li
              onClick={(event: any) =>
                handleSortPosition(event.target.firstChild.data)
              }
            >
              <a role="button">Quản lý dự án</a>
            </li>
            <li
              onClick={(event: any) =>
                handleSortPosition(event.target.firstChild.data)
              }
            >
              <a role="button">Leader</a>
            </li>
            <li
              onClick={(event: any) =>
                handleSortPosition(event.target.firstChild.data)
              }
            >
              <a role="button">Nhân viên</a>
            </li>
            <li
              onClick={(event: any) => handleSortPosition(event.target.value)}
            >
              <a role="button">Huỷ lọc</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Control;
