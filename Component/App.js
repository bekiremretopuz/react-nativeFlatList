import React, {Component} from "react";
import {View, Text, FlatList, StyleSheet, Image} from "react-native";
export default class App extends Component{
constructor(props){
  super(props);
  this.state={
    mang:[],
    refresh:false
  }
}


  render(){
    return(
      <FlatList

      refreshing={this.state.refresh}
      onRefresh={()=>{this.refresh()}}


      data={this.state.mang}
      renderItem={({item})=>
    <View style={ao.dong}>

<View style={ao.trai}>
<Image
style={ao.hinh}
source={{uri: item.HINH}}
/>
</View>

<View style={ao.phai}>
<Text>{item.HOTEN}</Text>
<Text style={ao.key}>{item.key}</Text>
</View>

    </View>
    }

  />
);
}
refresh(){
   
}
componentDidMount()
{
fetch("http://localhost/demo1.php")
.then((response)=>response.json())
.then((responseJson)=>{
  this.setState({
    mang:responseJson
  });
})
.catch((e)=>{console.log(e);});
}
}
 var ao = StyleSheet.create({
   dong:{borderBottomWidth:1, padding:50, borderRightWidth:1,flexDirection:"row" },
   trai:{flex:1, justifyContent:"center", alignItems:"center"},
   phai:{flex:3, justifyContent:"center", alignItems:"center"},
   hinh:{width:100,height:100,borderRadius:50},
   key:{color:"red",margin:10}
 });
