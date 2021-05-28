
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Touchable} from 'react-native';


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state={
      text:'',
      sSearchPressed:false,
          word:"loading...",
        lexicalCategory:"",
      examples:[],
    definition:""
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text ,
            isSearchPressed:false,
          word:"loading...",
        lexicalCategory:"",
      examples:[],
    definition:""});
          }}
          value={this.state.text}
        />
        <TouchableOpacity styles={styles.searchButton}
        onPress={()=> {
          this.setState({ isSearchPressed: true});
          this.getWord(this.state.text)
        }}>

        </TouchableOpacity>
      </View>


    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
});

getWord=()=>{
  var seaechKeyword=word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
  return fetch(url)
  .then((data)=>{
    if(data.status===200){
      return data.json()
    } else {
      return null
    }
  })
  .then((Response)=>{
    var ResponseObject = Response

    if(ResponseObject){
      var wordData = ResponseObject.definition[0]
      var definition = wordData.discription
      var lexicalCategory=wordData.wordtype
      this.setState({
        "word":this.state.text,
        "definition":definition,
        "lexicalCategory":lexicalCategory
      })

    } else {
      this.setState({
        "word" :this.state.text,
        "definition":"Not Found",
      })
    }
  })
}
