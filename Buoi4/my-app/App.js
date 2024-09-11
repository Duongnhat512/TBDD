import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      
      <View 
        style={{
          flex: 3,
          justifyContent: 'center'
        }}>
        <Image
          source={require('./assets/Ellipse.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      
      <View 
        style={{
          flex: 1
        }}>
        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center"}}>Grow {"\n"} Your Business</Text>
      </View>
      
      <View style={{flex: 1}}>
        <Text style={{textAlign: "center"}}>We will help you to grow your business using online server</Text>
      </View>
      <View 
        style={{
          flex: 2,
          flexDirection: "row", 
          width: "80%",
          justifyContent: "space-between"
        }}>
        <View
          style={{
            width: 120,
            height: 50,
            borderRadius: 15
          }}>
          <Button title="LOGIN"/>
        </View>
        <View
          style={{
            width: 120,
            height: 50,
            borderRadius: 15
          }}>
          <Button title="SIGN UP"/>
        </View>
      </View>
        
    </View>
  );
};



export default YourApp;