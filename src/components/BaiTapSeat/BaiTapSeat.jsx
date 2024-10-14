import React from "react";
import ListSeat from "./ListSeat";
import SelectSeat from "./SelectSeat";
import ViewTicket from "./ViewTicket";
import "../../style/BaiTapSeat.css";

export default function BaiTapSeat() {
  return (
    <div className="bg-image">
      <h3 className="text-center mb-4">Movie Seat Selection</h3>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <ListSeat />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectSeat />
        </div>
      </div>
      <ViewTicket />

      {/* Chú thích màu sắc */}
      <div className="mt-4 text-white">
        <h5>Chú Thích:</h5>
        <div className="d-flex flex-column">
          {" "}
          {/* Thay đổi từ 'd-flex align-items-center gap-3' thành 'd-flex flex-column' */}
          <div className="legend-item">
            <div className="color-box" style={{ backgroundColor: "red" }}></div>
            <span className="ms-2">Ghế Đã Đặt</span>
          </div>
          <div className="legend-item">
            <div
              className="color-box"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <span className="ms-2">Ghế Được Chọn</span>
          </div>
          <div className="legend-item">
            <div
              className="color-box"
              style={{ backgroundColor: "green" }}
            ></div>
            <span className="ms-2">Ghế Trống</span>
          </div>
        </div>
      </div>
    </div>
  );
}
