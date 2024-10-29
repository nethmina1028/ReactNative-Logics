import { StyleSheet } from "react-native";

const st = StyleSheet.create({
        textStyle:{
            color:'white',
            fontSize:20,
            backgroundColor:"yellow",
            margin:20,
            padding:20
        },
        shadowStyle:{
            padding:20,
            width:'80%',
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2

            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,

        },
        button:{
            backgroundColor:'red',
            paddingHorizontal:5,
            paddingVertical:2,
            borderRadius:5,
            marginBottom:10,
            textAlign:'center',
            width:120,
        }
});

export default st;