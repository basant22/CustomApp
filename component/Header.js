import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {
    const [cartItems, setCartItems] = useState(0)
    const cartData = useSelector((state) => state.reducer);
    
    useEffect(() => {
        setCartItems(cartData.length)
        //console.warn(cartData);
    }, [cartData])
    return (
        <View style={{ backgroundColor: 'orange' }}>
            <Text style={{ textAlign: "right", color: 'black', padding: 10 }}>{cartItems}</Text>
        </View>
    )
}
export default Header;