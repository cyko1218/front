import { View, StyleSheet } from 'react-native'
import {Link, Stack} from "expo-router";

export default function NotFoundScreen(){
    return (
        <>
        <Stack.Screen options={{ title: "Not Found"}}/>
        <View style={StyleSheet.container}>
            <Link href ="/" style = {StyleSheet.button}>
                Back to Home screen
            </Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#25292e",
        justifyContent: "center",
        alignItems : "center",
    },

    button:{
        fontSize: 20,
        textDecorationLin: "underline",
        color: "#fff",
    },
});