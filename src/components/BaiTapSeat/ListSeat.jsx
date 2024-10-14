import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookSeat, ChooseSeat } from "../../redux/action";

export default function ListSeat() {
  let listSeat = useSelector((state) => state.seatReducer.listSeat);
  let selectedSeats = useSelector((state) => state.seatReducer.selectedSeats);
  const dispatch = useDispatch();

  const handleSelectSeat = (seat) => {
    dispatch(ChooseSeat(seat));
  };

  const handleBookSeat = () => {
    dispatch(BookSeat());
  };

  const isSeatSelected = (seat) =>
    selectedSeats.some((item) => item.soGhe === seat.soGhe);

  return (
    <div className="mt-4 mb-5">
      <h3 className="text-center mb-4">Màn hình</h3>
      <div className="d-flex justify-content-center">
        <div className="row" style={{ maxWidth: "800px" }}>
          {listSeat.map((row, index) => (
            <div key={index} className="col-12 mb-2 d-flex align-items-center">
              <div className="col-auto fs-5 fw-bold me-3">{row.hang}</div>
              <div className="col d-flex flex-wrap" style={{ gap: "10px" }}>
                {row.danhSachGhe.map((seat) => (
                  <button
                    key={seat.soGhe}
                    className={`btn ${
                      seat.daDat
                        ? "btn-danger"
                        : isSeatSelected(seat)
                        ? "btn-warning"
                        : "btn-success"
                    }`}
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleSelectSeat(seat)}
                    disabled={seat.daDat}
                  >
                    {seat.soGhe}
                  </button>
                ))}
              </div>
            </div>
          ))}
      <button
        className="btn btn-dark mt-3"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={handleBookSeat}
      >
        Đặt Ghế
      </button>
        </div>
      </div>
    </div>
  );
}
