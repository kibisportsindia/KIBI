import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import MultipleSelect from 'react-native-multiple-select';
import FormButton from './FormButton'


const items = [
  {id: 1, name: 'Aquatics'},
  {id: 2, name: 'Archery'},
  {id: 3, name: 'Arm-Wrestling'},
  {id: 4, name: 'Athletics'},
  {id: 5, name: 'Badminton'},
  {id: 6, name: 'Baseball/Softball'},
  {id: 7, name: 'Basketball'},
  {id: 8, name: 'Boxing'},
  {id: 9, name: 'Bodybuilding'},
  {id: 10, name: 'Canoeing'},
  {id: 11,  name:'Chess'},
  {id: 12, name: 'Cricket'},
  {id: 13, name: 'Cycling'},
  {id: 14, name: 'Equestrian'},
  {id: 15, name: 'Fencing'},
  {id: 16, name: 'Field Hockey'},
  {id: 17, name: 'Football'},
  {id: 18, name: 'Golf'},
  {id: 19, name: 'Gymnastics'},
  {id: 20, name: 'Handball'},
  {id: 21, name: 'Judo'},
  {id: 22, name: 'Karate'},
  {id: 23, name: 'Pentathlon'},
  {id: 24, name: 'Powerlifting'},
  {id: 25, name: 'Rowing'},
  {id: 26, name: 'Rugby'},
  {id: 27, name: 'Sailing'},
  {id: 28, name: 'Shooting'},
  {id: 29, name: 'Skateboarding'},
  {id: 30, name: 'Sport Climbing'},
  {id: 31, name: 'Surfing'},
  {id: 32, name: 'Table Tennis'},
  {id: 33, name: 'Taekwondo'},
  {id: 34, name: 'Tennis '},
  {id: 35, name: 'Triathlon'},
  {id: 36, name: 'Volleyball'},
  {id: 37, name: 'Weightlifting '},
  {id: 38, name: 'Wrestling'},
  {id: 39, name: 'Chess'},
];

export default class SportSearch extends Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = selectedItems => {
    if (selectedItems.length>9){
      alert("Only 9 sports allowed")
    }
    
   else if(selectedItems.length<=9){
      this.setState({selectedItems})
    }};
  render() {
    const {selectedItems} = this.state;

    return (
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.container}>
          <MultipleSelect
            fixedHeight={true}
            hideTags
            hideSubmitButton
            items={items}
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Select sport"
            searchInputPlaceholderText="Select sport"
            onChangeInput={text => console.log(text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="red"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="green"
            selectedItemIconColor="green"
            itemTextColor="#432344"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#432344"
            submitButtonText="Submit"
          />
              </View>
              <ScrollView style = {{marginTop:100}}>
              {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
   </ScrollView>
   <View style ={{position:'absolute',marginTop: 50,alignSelf:'center'}}>
   <FormButton buttonTitle="Get started"></FormButton>
            </View>
   
            
      </SafeAreaView>
    
    );
  }
}

const styles = StyleSheet.create({
  containerSafe: {    
    backgroundColor: '#fff',
    height:'100%'
    
    
  },

  container:{
    position:'relative',
    marginTop:0,

  },


  titleText: {
    padding: 8,
    fontSize: 0,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 5,
  },
});
