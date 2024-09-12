import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput,View , TouchableHighlight , Text} from "react-native";

 const SaveForm =(props)=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [age,setAge] = useState(0)
    const [fetched,setFetched] = useState(false)

    const [nameError,setNameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [ageError,setAgeError] = useState(false)
    const saveDetailApi= async()=>{
        if (!name){
            setNameError(true)
        }else{
            setNameError(false)
        }
        if (!email){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        if (!age){
            setAgeError(true)
        }else{
            setAgeError(false)
        }
        if (!name || !age || !email){
            return false
        }
        const data ={
            name:name,
            email:email,
            age:age
        }
    const url = 'http://192.168.29.26:3000/users';
    let result = await fetch(url,{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    });
    result = await result.json();
    if (result){
     setFetched(true)
     props.navigation.navigate("UserPosts",{name})
    }
    }
    return(
        <View style={styles.main}>
             <View style={{height:50}}/>
            <ScrollView>
          <View style={styles.viewInput}>
            <TextInput style={styles.txtInput} placeholder="Name"
             onChangeText={(txt) => {setName(txt), setFetched(false)}}
            />  
          </View>
          {
                nameError ? <Text style={styles.errorText}>Please enter your name</Text>:null
            }
          <View style={styles.viewInput}>
            <TextInput style={styles.txtInput} placeholder="Email"
             onChangeText={(txt) => setEmail(txt)}
            />
           
          </View>
          {
                emailError ? <Text style={styles.errorText}>Please enter your email</Text>:null
            }
          <View style={styles.viewInput}>
            <TextInput style={styles.txtInput} placeholder="Age"
             onChangeText={(txt) => setAge(txt)}
            />
            
          </View>
          {
                ageError ? <Text style={styles.errorText}>Please enter your age</Text>:null
            }
          <View style={{ height: 10 }} />
          {
            fetched ? <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#000',
            }}>Save Detail successfully </Text> : null
          }
          <View style={{ height: 10 }} />
            <TouchableHighlight onPress={saveDetailApi}>
                <View style={styles.btnshow}>
                    <Text style={styles.btnText}>Save Detail</Text>
                </View>
            </TouchableHighlight>
            <View style={{ height: 10 }} />
            <TouchableHighlight onPress={()=>props.navigation.navigate("UpdateUser")}>
                <View style={styles.btnshow}>
                    <Text style={styles.btnText}>Update Detail</Text>
                </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1
    },
    viewInput:{
       marginHorizontal:30,
       marginVertical:10,
       borderRadius:15,
       borderWidth: 2.0,
       padding:10,
       borderColor:'black'
    },
    txtInput:{
        color:'black',
        fontSize:20,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
    },
    btnshow: {
        backgroundColor: 'grey',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        elevation: 5,
        shadowOpacity: 0.3,
        shadowColor: 'black',
    },
    errorText:{
        color:'red',
        marginLeft:30,
        marginBottom:10
    }
})
export default SaveForm