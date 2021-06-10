class Collection{
  constructor(axios){
      this.axios = axios
  }

  async create(collectionData){
      try {
          const response = await this.axios.post("users/:userID/collections", collectionData)

          return response.data
      }catch(error){
          throw error
      }
  }
}

export default User
