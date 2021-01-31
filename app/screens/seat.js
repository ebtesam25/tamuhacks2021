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

export default class Seat extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    loc:'Location not set',
    org: true,
    amount:0,
    flight: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }

  getData() {
    return  [
    {
      
    title:"5A",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"ASTLEY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    description_long:"Like so many other Americans and families in our community, we’ve fallen on hard times. My wife was unfortunately let go from her longtime job months ago, and despite having substantial savings before the pandemic, we find ourselves extremely low on funds right before Christmas. We’re hoping the wonderful people of this community can help us put food on the table for our kids’ favorite holiday. Any help would be so, so appreaciate.",
    reached: 500,
    goal : 100,
  },
  {
    
    title:"14D",
    image:"https://www.gannett-cdn.com/presto/2020/03/16/PMJS/b728c725-e50f-47ac-ab41-a33f4ba16f6c-MJS_Coronavirus_Movie_Cancel_01429.JPG?crop=3899,2194,x0,y0&width=3200&height=1801&format=pjpg&auto=webp", 
    location:"KNIGHT",
    description:"Heading into our 60th year of business, what’s become a local institution needs help from the community to survive",
    reached: 100,
    goal : 100,
  },
  
  ]
  }



 

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={{height:'100%'}}>
      <Image source={require('../assets/logo.png')} style={{width:'40%', height:'10%', resizeMode:'contain', alignSelf:'flex-start', marginLeft:'5%'}}></Image>
      <Text style={{position:'relative',fontSize:30,textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingRight:'5%'}}>Miles Auction</Text>
      
       <View style={{height:'80%'}}>
           
       <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#36495A'}}>BALANCE</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Your balance</Text>
            <Text style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}>2,305,023 miles</Text>
            </View>
      </View>
      <View style={styles.playing}>
      
      {!this.state.flight &&   <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#9DA6AB'}}>FLIGHT INFO</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Flight No.</Text>
            <TextInput placeholder="AA001" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#9DA6AB'}} onPress={()=>{this.setState({flight:true})}}>View Auctions ></Text>


            </View>}
      </View>
    {this.state.flight &&  <ScrollView>
        <PostList itemList={this.getData()} ></PostList>
   

      <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#C30019'}}>UPGRADE SEAT</Text>


            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Place bid</Text>
            <TextInput placeholder="miles" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Seat</Text>
            <TextInput placeholder="1A" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#C30019'}}>PLACE BID ></Text>
</View>
      </View>
      <View style={styles.playing}>
      
      <View style={{display:'flex'}}>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#0078D2'}}>EARN MILES</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Seat</Text>
            <TextInput placeholder="1A" style={{position:'relative', alignSelf:'center', width:'70%', fontFamily:'FuturaH', fontSize:20,color:'#333'}}></TextInput>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#0078D2'}}>Place auction ></Text>
            </View>
      </View>
      
      <View style={styles.play}>
      
      
      </View>
      </ScrollView>}
      </View> 
     <Image source={require('../assets/bottom.png')} style={{position:'absolute', bottom:-100, width:'100%'}}></Image>
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
      paddingBottom:'0%',
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