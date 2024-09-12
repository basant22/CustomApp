import React from "react";
import { SectionList, Text, View } from "react-native";

 const ShowHeader = ()=>{
    const user = [
        {
            id:1,
            name:'Anil',
            data:['Swift','SwiftUI','Python']
        },
        {
            id:2,
            name:'Sunil',
            data:['C','C++','React']
        },
        {
            id:3,
            name:'Gaurav',
            data:['Sql','NodeJs','BigData']
        },
        {
            id:4,
            name:'Saurabh',
            data:['Java','Cotline','Dart']
        },
        {
            id:5,
            name:'Vinay',
            data:['.Net','C#','Python']
        }
    ]
    return(
        <View>
            <SectionList
            sections = {user}
            renderItem = {({item})=><Text style={{fontSize:18,marginLeft:15}}>{item}</Text> }
            renderSectionHeader = {({section:{name}}) => <Text 
             style={{fontSize:18,margin:5,color:'red'}}>{name}</Text>}
            />
        </View>
    );
}
export default ShowHeader