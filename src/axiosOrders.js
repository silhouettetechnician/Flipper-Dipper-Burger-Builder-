import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-3654d.firebaseio.com/'
})

export default instance



