export const ChooseSeat = (seat) => {
    return{
        type:"SELECT_SEAT",
        payload: {seat},
    }
}

export const BookSeat = () => {
    return{
        type: "BOOK_SEAT",
    }
}

export const DeleteSeat = (soGhe) => {
    return {
        type: "DELETE_SEAT",
        payload: { soGhe }, 
    };
};