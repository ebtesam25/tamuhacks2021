import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'

export default function Post({ route,title,image, location, description, description_long, reached, goal}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
         <Text style={{backgroundColor:'#0078D2', fontFamily:'FuturaL', color:'#FFF', paddingVertical:10, paddingLeft:'5%'}}>Ongoing Auction</Text>
        <View style={styles.fishdeets}>  
        <Text style={styles.location}>
                {location}
            </Text>
        <Text style={styles.name}>{title}</Text>
        
         
       <Text style={styles.goal}>Highest bid: {reached} miles</Text>
     
         
        </View>
   
        
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:'2%',
        borderRadius: 0,
        backgroundColor: '#FFF',
        elevation:1,
        alignSelf:'center',
        justifyContent:'center',
        width:350,
        
    },
    name: {
        fontSize: 20,
        color:'#0078D2',
        fontFamily:'FuturaH',
        marginTop: '5%',
        marginBottom:'5%',
        textAlignVertical:'center',

    },
    
    fishdeets: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        
    },
    goal: {
        fontSize: 18,
        fontFamily:'FuturaH',
        color:'#0078D2',
        marginTop:'5%',
        marginBottom:'5%'
    },
    location: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#0078D2',
        marginTop:10,
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#0078D2',
        marginTop:'5%',
    },
    more: {
        fontSize: 18,
        fontFamily:'FuturaH',
        color:'#0078D2',
        marginTop:'5%',
    },
   deets:{
       borderRadius:30,
       fontFamily:'FuturaH',
       elevation:2,
       backgroundColor:'#379DA6',
       color:'#FFF',
       fontSize:15,
       padding:'5%',
       textAlign:'center',
       width:'50%',
       left:'22.5%',
       marginTop:'5%',
       marginBottom:'7.5%',
   }
});