import React from 'react'
import * as APIHelper from '../utils/Axios/APIHelper'
import { create } from 'zustand';

const useLibrary = create((set) => ({
    categoryData: null,
    getCategoryError: null,

    categoryPostResponse: null,
    postCategoryError: null,

    brandData: null,
    getBrandError: null,

    brandPostResponse: null,
    postBrandError: null,

    getCategory: async (rerender = false) => {
        if (rerender == true) {
            set({ categoryData: null });
        } else {
            try {

                const response = await APIHelper.GET("/api/getCategory")
                console.log(response)
                if (response != undefined) {
                    if (response.data != undefined) {
                        console.log(response)
                        set({ categoryData: response.data });
                    }
                }

            } catch (error) {
                console.log(error)
                set({ getCategoryError: error });

            }
        }
    },

    postCategory: async (reqData, rerender = false) => {

        console.log(reqData)

        if (rerender == true) {
            set({ categoryPostResponse: null });
        } else {
            try {
                const response = await APIHelper.POST("/api/postCategoryRequest", reqData)
                console.log(response)
                if (response != undefined) {
                    if (response.data != undefined) {
                        console.log(response)
                        set({ categoryPostResponse: response.data });
                    }
                }

            } catch (error) {
                console.log(error)
                set({ postCategoryError: error });

            }
        }

    },

    getBrand: async (rerender = false) => {
        if (rerender == true) {
            set({ brandData: null });
        } else {
            try {

                const response = await APIHelper.GET("/api/getBrand")
                console.log(response)
                if (response != undefined) {
                    if (response.data != undefined) {
                        console.log(response)
                        set({ brandData: response.data });
                    }
                }

            } catch (error) {
                console.log(error)
                set({ getBrandError: error });

            }
        }
    },

    postBrand: async (reqData, rerender = false) => {

        console.log(reqData)

        if (rerender == true) {
            set({ brandPostResponse: null });
        } else {
            try {
                const response = await APIHelper.POST("/api/postBrandRequest", reqData)
                console.log(response)
                if (response != undefined) {
                    if (response.data != undefined) {
                        console.log(response)
                        set({ brandPostResponse: response.data });
                    }
                }

            } catch (error) {
                console.log(error)
                set({ postBrandError: error });

            }
        }

    },

}));

export default useLibrary