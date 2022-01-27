import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
      modal: null,
  },
  reducers: {
    showing: (state, action) => {
      state.modal = action.payload;
    },
    hiding: (state) => {
      state.modal = null;
    },
  },

});

export const { showing, hiding } = modalSlice.actions;

export const selectModal = (state) => state.modal.modal;

export default modalSlice.reducer;