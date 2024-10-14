import seatData from "../components/data/seatData.json";

let initialState = {
  listSeat: seatData,
  selectedSeats: [],
};

let seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_SEAT": {
      // tạo bản sao cart
      let updateCart = [...state.selectedSeats];
      const seat = action.payload.seat;

      // tìm đến ghế đã chọn
      const seatIndex = updateCart.findIndex(
        (item) => item.soGhe === seat.soGhe
      );
      if (seatIndex !== -1) {
        // nếu đã có trong giỏ hàng thì xoá nó
        updateCart.splice(seatIndex, 1);
      } else {
        // nếu chưa có thì thêm chúng vào
        updateCart.push(seat);
      }
      return { ...state, selectedSeats: updateCart };
    }

    case "BOOK_SEAT": {
      // Đánh dấu ghế đã đặt và reset danh sách ghế đã chọn
      let updatedListSeat = state.listSeat.map((row) => ({
        ...row,
        danhSachGhe: row.danhSachGhe.map((seat) => {
          // Kiểm tra nếu ghế nằm trong danh sách đã chọn
          if (state.selectedSeats.some((item) => item.soGhe === seat.soGhe)) {
            // Đánh dấu ghế đã đặt
            return { ...seat, daDat: true };
          }
          // Trả về ghế không thay đổi nếu không nằm trong danh sách đã chọn
          return seat;
        }),
      }));

      // Cập nhật state với danh sách ghế mới và reset danh sách ghế đã chọn
      return { ...state, listSeat: updatedListSeat, selectedSeats: [] };
    }

    case "DELETE_SEAT": {
      // Lọc các ghế không phải là ghế cần xóa
      const newCart = state.selectedSeats.filter(item => item.soGhe !== action.payload.soGhe);
      return { ...state, selectedSeats: newCart };
    }
    
    default:
      return state;
  }
};

export default seatReducer;
