
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator , TextInput} from "react-native";
import NewComponent from "../NewComponent";

const UserPosts = (props) => {
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false)
    const fetchPosts = async () => {
        setShow(true)
        const url = 'http://192.168.29.26:3000/users';
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setPosts(result);
            setShow(false);
        }
       
    }
    const searchUser = async (txt) => {
        //console.warn(txt);
        setShow(true)
        const url = `http://192.168.29.26:3000/users?q=${txt}`;
        console.warn(url);
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setPosts(result);
            setShow(false);
        }
    }
    useEffect(() => {
        console.warn("onLoad once")
        fetchPosts()
    }, [])
    useEffect(() => {
        console.warn("onLoad always")
        fetchPosts()
    }, [props.name])
    return (
        <View style={styles.main}>
            {
                posts.length ?

                    <View>
                        <View
                            style={styles.txtStyle}>
                            <TextInput
                                style={styles.txtInputStyle}
                                placeholder="Search User"
                                onChangeText={(txt) => searchUser(txt)}
                            />
                        </View>
                        <FlatList
                            data={posts}
                            renderItem={({ item }) => <NewComponent item={item} />
                            }
                        />
                    </View>
                    : <ActivityIndicator size={"large"} color={'green'} animating={show} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'gray',
    },
    txtStyle: {
        marginHorizontal: 30,
         marginVertical: 20,
          borderColor: 'green',
         borderWidth: 2.0,
         borderRadius: 10,
         padding:10
    },
    txtInputStyle: { marginLeft: 10, fontSize: 18 }
})
export default UserPosts