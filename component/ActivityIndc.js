import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";

const Indicator = () => {
    const [show,setShow] = useState(false)
    const display = () =>{
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 5000);
    }
return(
    <View>
        <Button title="Show Indicator" onPress={display}/>
        <ActivityIndicator size={"large"} color={'green'} animating ={show}/>
    </View>
)
}
export default Indicator