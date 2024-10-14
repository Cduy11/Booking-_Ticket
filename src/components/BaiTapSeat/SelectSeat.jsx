import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteSeat } from "../../redux/action";

export default function SelectSeat() {
  let seatCart = useSelector((state) => state.seatReducer.selectedSeats);
  const dispatch = useDispatch();

  const handleDelete = (soghe) => {
    dispatch(DeleteSeat(soghe));
  };

  const renderCart = () => {
    if (seatCart.length === 0) {
      return (
        <tr>
          <td colSpan="3" className="text-center"> 
            Chưa có ghế nào được chọn.
          </td>
        </tr>
      );
    }
    return seatCart.map((item, index) => (
      <tr key={index}>
        <td>{item.soGhe}</td>
        <td>{item.gia.toLocaleString()} VND</td>
        <td>
          <button 
            className="btn btn-danger" 
            onClick={() => handleDelete(item.soGhe)}
          >
            Xoá
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="mt-4">
      <h4>Danh Sách Ghế Đã Chọn</h4>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Số Ghế</th>
            <th>Giá</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>{renderCart()}</tbody>
      </table>
    </div>
  );
}
