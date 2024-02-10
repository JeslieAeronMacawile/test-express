import React from 'react'
import * as APIHelper from '../utils/Axios/APIHelper'
import { create } from 'zustand';

const userLogin = create((set) => ({
    userData: null,
    getUserError: null,

    loginData: null,

    setloginData: (data) => set({ loginData: data }),
    // categoryPostResponse: null,
    // postCategoryError: null,

    getUser: async (reqData, rerender = false) => {

        console.log(reqData)

        if (rerender == true) {
            set({ userData: null });
        } else {
            try {
                const response = await APIHelper.GET("/api/getUser" + reqData)
                console.log(response)
                if (response != undefined) {
                    if (response.data != undefined) {
                        console.log(response)
                        set({ userData: response.data });
                    }
                }

            } catch (error) {
                console.log(error)
                set({ getUserError: error });

            }
        }
    },



}));

export default userLogin