import React,{Component} from "react";
import { Button, Text, TextInput, View } from "react-native";

class StudentDetail extends Component{
render(){
    return(
     <View>
        <Text style={{fontSize:20,color:"red",textAlign:'center',margin:10}}>{this.props.name}</Text>
     </View>   
    )
}
}
export default StudentDetail