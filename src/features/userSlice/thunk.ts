import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAlarmsThunk = createAsyncThunk('profile/getAlarmsThunk', async () => {
    // const response = await getAlarmsService();
    // if (response?.data?.messageCode === 201) {
    //     throw new Error(response.data?.message);
    // }
    // const alarmsList = response?.data?.result;
    // return alarmsList;
});
