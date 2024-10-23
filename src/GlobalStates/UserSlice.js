import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:'user',
  initialState:{
    userInput:'',
    userId:''
  },
  reducers:{
    addUserInput:(state,action)=>{
      state.userInput=action.payload
    },
    setUserId:(state,action)=>{
      state.userId=action.payload
    }
  }
})

export const {userInput,addUserInput,userId,setUserId}=userSlice.actions
export default userSlice.reducer