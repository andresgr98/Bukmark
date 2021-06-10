class Auth{
  constructor(axios){
      this.axios = axios
  }

  async login(nickname, password){
      try {
          const response = await this.axios.post("auth/login", {nickname, password})

          return response.data
      }catch(error){
          throw error
      }
  }
}

export default Auth
