import { takeEvery ,put} from "redux-saga/effects"
import { USER_LIST } from "./constants"
import { SET_USER_DATA } from "./constants"

function* userList(){
console.warn("saga function called")
let url = 'https://dummyjson.com/users'
let data = yield fetch(url);
data = yield data.json();
data = data.users

yield put({type:SET_USER_DATA,data})
//console.warn("saga data",data);
//console.warn(data)
}
function* SagaData(){
yield takeEvery(USER_LIST,userList)
}
export default SagaData