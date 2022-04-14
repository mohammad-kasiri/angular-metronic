export interface UserRegister_Req
{

}

export interface UserRegister_Success_Res
{
  user : {
    email : string,
    created_at : string
  },
  token : string
}


export interface UserRegister_Error_Res 
{
  message: string,
  errors: Object | null
}