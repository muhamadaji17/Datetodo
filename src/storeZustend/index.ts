import axios from 'axios'
import create from 'zustand'

const getAllDate = create((set:any) => ({
    dateTodo: [],
    refresh: false,
    getAll: async() => {
        try {
            const response = await axios.get(`${process.env.endPoint}/`,{
                headers:{
                    xtoken : sessionStorage.getItem('xtoken')
                }
            })
            set({dateTodo: response.data.payload, refresh:true})
        } catch (error) {
            console.log(error)
        }
    }
}))

export default getAllDate