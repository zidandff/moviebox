class DataSource {
  static API_KEY = 'f5d2f9a681a468ceedcc6c60f57f82ee';
    
  static getMovies(endpoint){
    return fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${this.API_KEY}`)
      .then(response => response.json())
      .then(responseJson => {
        if(responseJson.results){
          return responseJson
        }else {
          return responseJson.status_message;
        }
      })
      .catch(error => console.log(error))
  }
}

export default DataSource