import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { getUserList } from "./Redux/action";

const UserList = () => {
    const dispatch = useDispatch();
    const [userList,setUserList] = useState()
    const userData = useSelector((state) => state.reducer)
    console.warn("saga data users",userData);
    useEffect(() => {
        dispatch(getUserList())
    }, [])
    // useEffect(() => {
    //     console.warn("saga data users",userData);
    // }, [userData])
    return (
        <View style= {styles.main}>
            {
               // userData.length?
                userData.map((item)=>
                    <View style= {styles.main}>
                    <Text style={{color:'green',fontSize:18}}>FirstName:{item.firstName}  LastName: {item.lastName}</Text>
                    </View>
                )
                // :<View>
                // <Text style={{color:'black'}}>Not Found</Text>
                // </View>
            }
           
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'skyblue'
    }
})
export default UserList;