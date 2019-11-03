const initialState = {
  qr: {
    data: 10,
    barcodeType: ''
  }
}

const qrReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SCAN_DATA':
      return ({
        ...state,
        qr: {
          data: action.data
        }
      });
    default:
      return state;
  }
}

export default qrReducer;
