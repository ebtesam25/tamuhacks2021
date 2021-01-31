import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, ImageBackground} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Icon} from 'react-native-elements';
import CardList from "../components/cardList";
import PostList from '../components/postList';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Home extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    loc:'Location not set',
    org: true,
    comm: true
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();


  }
  _setOrg(){
    this.setState({org:!this.state.org})
  }
  _setComm(){
    this.setState({comm:!this.state.comm})
  }


_getCauses(){
  fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/bethechangegetcauses', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({"category": "all"})
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });
}

_getLocation(){
  fetch('http://api.positionstack.com/v1/reverse?access_key=6326c64cc797f30aadf8cf2494eff26f&query=40.7638435,-73.9729691&limit=2', {
    method: 'GET',
})
.then((response) => response.json())
.then((responseJson) => {
console.log(responseJson.data[0]);
this.setState({'loc':responseJson.data[0].label})
})
.catch((error) => {
    console.error(error);
});

}
  
  getData() {
    return  [
    {
      
    title:"Keep our Business Running",
    image:"https://saudigazette.com.sa/uploads/images/2020/08/29/1624784.jpg", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 100,
  },
  {
    
    title:"Community Church Project",
    image:"https://www.churchleadership.com/wp-content/uploads/2010/12/lightstock_145365_medium_ann_.jpg", 
    location:"Manhattan, NY",
    reached: 80,
    goal : 100,
  },
  {
    
    title:"Christmas Dinner Fund",
    image:"https://i2-prod.bristolpost.co.uk/incoming/article4644873.ece/ALTERNATES/s1200/2_Everybody-is-busy-on-that-day.jpg", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 200,
  },
  {
    
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 100,
  },
  ]
  }

  getCData() {
    return  [
  {
    
    title:"Community Church Project",
    image:"https://www.churchleadership.com/wp-content/uploads/2010/12/lightstock_145365_medium_ann_.jpg", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    description_long:"Like so many other Americans and families in our community, we’ve fallen on hard times. My wife was unfortunately let go from her longtime job months ago, and despite having substantial savings before the pandemic, we find ourselves extremely low on funds right before Christmas. We’re hoping the wonderful people of this community can help us put food on the table for our kids’ favorite holiday. Any help would be so, so appreaciate.",
    reached: 80,
    goal : 100,
  },
  {
    
    title:"Christmas Dinner Fund",
    image:"https://i2-prod.bristolpost.co.uk/incoming/article4644873.ece/ALTERNATES/s1200/2_Everybody-is-busy-on-that-day.jpg", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    description_long:"Like so many other Americans and families in our community, we’ve fallen on hard times. My wife was unfortunately let go from her longtime job months ago, and despite having substantial savings before the pandemic, we find ourselves extremely low on funds right before Christmas. We’re hoping the wonderful people of this community can help us put food on the table for our kids’ favorite holiday. Any help would be so, so appreaciate.",
    reached: 50,
    goal : 200,
  },

  ]
  }


  getOData() {
    return  [
    {
      
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    description_long:"Like so many other Americans and families in our community, we’ve fallen on hard times. My wife was unfortunately let go from her longtime job months ago, and despite having substantial savings before the pandemic, we find ourselves extremely low on funds right before Christmas. We’re hoping the wonderful people of this community can help us put food on the table for our kids’ favorite holiday. Any help would be so, so appreaciate.",
    reached: 50,
    goal : 100,
  },
  {
    
    title:"Save The Downer",
    image:"https://www.gannett-cdn.com/presto/2020/03/16/PMJS/b728c725-e50f-47ac-ab41-a33f4ba16f6c-MJS_Coronavirus_Movie_Cancel_01429.JPG?crop=3899,2194,x0,y0&width=3200&height=1801&format=pjpg&auto=webp", 
    location:"Manhattan, NY",
    description:"Heading into our 60th year of business, what’s become a local institution needs help from the community to survive",
    reached: 80,
    goal : 100,
  },
  
  ]
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg.jpg')} style={{height:'100%'}}>
      <Image source={require('../assets/logo.png')} style={{width:'50%', height:'15%', resizeMode:'contain', alignSelf:'flex-start', marginLeft:'5%'}}></Image>
      
      
     <View style={styles.playing}>
      
      <View>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%', backgroundColor:'#C30019'}}>Coronavirus travel updates</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#333', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Your safert abd well-being are our top priorities. We want to ensure you have the latest information to adjust your travel</Text>
            </View>
      </View>

      <View style={styles.play}>
      
      <View>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Earn 50,000 bonus miles</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Plus, first checked bag is free on domestic itineraries. Terms apply.</Text>
            </View>
      </View>
      
      <View style={styles.play}>
      
      <View>
            <Text style={{position:'relative',fontSize:20,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaH', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}}>Miles trade center</Text>
            <Text style={{position:'relative',fontSize:17,marginTop:'0%',textAlign:'left', color:'#FFF', fontFamily:'FuturaL', paddingLeft:'5%', paddingVertical:'3.5%', paddingRight:'5%'}} onPress={()=>{this.props.navigation.navigate('Trade')}}>Trade your extra miles with other passengers</Text>
            </View>
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
      height:'18%',
      elevation:1,
      backgroundColor:'#FDFDFD',
      alignSelf:'center',
      marginTop:'1.5%',
      
  },
  play:{
    width:'90%',
    height:'18%',
    elevation:1,
    backgroundColor:'#333',
    opacity:0.8,
    alignSelf:'center',
    marginTop:'1.5%',
    
}
  
});