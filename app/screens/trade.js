import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Icon} from 'react-native-elements';
import CardList from "../components/cardList";
import PostList from '../components/postList';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Trade extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    loc:'Location not set',
    org: true,
    amount:0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }

 

 

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={{height:'100%'}}>
      <Image source={require('../assets/logo.png')} style={{width:'40%', height:'10%', resizeMode:'contain', alignSelf:'flex-start', marginLeft:'5%'}}></Image>
      <Text style={{position:'relative',fontSize:30,textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingRight:'5%'}}>Trade Miles</Text>
       <View style={{height:'70%'}}>
       <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#36495A'}}>BALANCE</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Your balance</Text>
            <Text style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}>2,305,023 miles</Text>
            </View>
      </View>
      <ScrollView>

     <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#0078D2'}}>SELL MILES</Text>
 
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Miles for sale</Text>
            <TextInput placeholder="miles" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>You will receive</Text>
            <Text style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}>${this.state.amount}</Text>
            </View>
      </View>

      <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#0078D2'}}>BUY MILES</Text>

            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Miles for sale</Text>
            <TextInput placeholder="miles" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>You will receive</Text>
            <Text style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}>${this.state.amount}</Text>
            </View>
      </View>

      
      <View style={styles.play}>
      
      <View>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>MILES AUCTION</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}} onPress={()=>{this.props.navigation.navigate('Seat')}}>Trade your extra miles for a seat</Text>
            </View>
      </View>
      </ScrollView>
      </View> 
     <Image source={require('../assets/bottom.png')} style={{position:'absolute', bottom:0, width:'100%'}}></Image>
    </ImageBackground>  
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF9EB'
  },

  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  album:{
    height:'40%',
    width:'50%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
 
  playing:{
      width:'90%',
      elevation:1,
      paddingBottom:'10%',
      backgroundColor:'#FDFDFD',
      alignSelf:'center',
      marginTop:'1.5%',
      
  },
  play:{
    width:'90%',
    height:'60%',
    elevation:1,
    backgroundColor:'#333',
    opacity:0.8,
    alignSelf:'center',
    marginTop:'1.5%',
    
}
  
});