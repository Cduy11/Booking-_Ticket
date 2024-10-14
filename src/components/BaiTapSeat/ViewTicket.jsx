import React from "react";
import { useSelector } from "react-redux";

export default function ViewTicket() {
  const listSeat = useSelector((state) => state.seatReducer.listSeat);

  const renderViewTicket = () => {
    let bookedSeats = [];
    let totalAmount = 0;

    listSeat.forEach((row) => {
      row.danhSachGhe.forEach((seat) => {
        if (seat.daDat) {
          bookedSeats.push(seat);
          totalAmount += seat.gia;
        }
      });
    });

    if (bookedSeats.length === 0) {
      return (
        <tr>
          <td colSpan="3" className="text-center">
            Chưa có ghế nào được đặt.
          </td>
        </tr>
      );
    }

    return (
      <>
        {bookedSeats.map((seat, index) => (
          <tr key={index}>
            <td>{seat.soGhe}</td>
            <td>{seat.gia.toLocaleString()} VND</td>
            <td>{seat.gia.toLocaleString()} VND</td>
          </tr>
        ))}
        <tr>
          <td colSpan="1" className="text-center fw-bold">Tổng tiền:</td>
          <td className="fw-bold">{totalAmount.toLocaleString()} VND</td>
        </tr>
      </>
    );
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Ghế Đã Đặt
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Số Ghế</th>
                    <th>Giá</th>
                    <th>Tổng Giá</th>
                  </tr>
                </thead>
                <tbody>{renderViewTicket()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Xác Nhận Đặt Ghế
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
