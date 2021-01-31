import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Icon} from 'react-native-vector-icons';

import { Bg } from "../assets/bg.jpg";
let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Splash extends React.Component  {
  state = {
    fontsLoaded: false,
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
      <ImageBackground source={require('../assets/bg.jpg')}  style={{width:'100%', height: '100%'}}>
      <Image source={require('../assets/logo.png')} style={styles.header}></Image>
      <View style={{}}>
        <Image source={require('../assets/form.png')} style={{alignSelf:'center', resizeMode:'contain', height:'50%', width:'80%'}}></Image>
        <Text onPress={()=>this.props.navigation.navigate('Home')}  style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaL', marginTop:'5%',  padding:'5%', width:'100%', alignSelf:'center'}}>Continue as guest</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaL', marginTop:'5%',  padding:'5%', width:'100%', alignSelf:'center'}}>Need AAdvantage number or password?</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaL', marginTop:'10%',  padding:'5%', width:'100%', alignSelf:'center'}}>Privacy Polocy</Text>

      </View>
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
    flex:1,
    flexDirection:'column'
  },
  header:{
    height:'20%',
    width:'70%',
    marginTop:'5%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});