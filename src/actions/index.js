// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com';

export function setMessages(){
  const url = `${BASE_URL}/general/messages`;
  const promise = fetch(url).then(r => r.json());
  // Do something with the data returned by the API
    return{
      type: 'SET_MESSAGES',
      payload: promise
    };
 };
