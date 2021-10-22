import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Component } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent />
      <StatusBar style="auto" />
	</View>
  );
}

const componentArr = [
	{ key: 0, text: "did you brush your teeth?" , buttonNum : 2, textBox : false},
	{ key: 1, text: "did you sleep enough?" , buttonNum : 2, textBox : false},
	{ key: 2, text: "what homework do you have?" , buttonNum : 1, textBox : true},
	{ key: 3, text: "do you have any tests tomorrow?" , buttonNum : 2, textBox : false},
	{ key: 4, text: "how are you feeling today?" , buttonNum : 3, textBox : false},
	{ key: 5, text: "what did you eat today?" , buttonNum : 1, textBox : true},
	{ key: 6, text: "did you take a shower?" , buttonNum : 2, textBox : false},
	{ key: 7, text: "what made you happy today?" , buttonNum : 1, textBox : true},
	{ key: 8, text: "what did you wear today?" , buttonNum : 1, textBox : true},
	{ key: 9, text: "how much water did you drink?" , buttonNum : 1, textBox : true},
	{ key: 10, text: "is your room clean?" , buttonNum : 2, textBox : false},
	{ key: 11, text: "did you exercise today?" , buttonNum : 2, textBox : false},


]

let count = 0;
class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			num: 0
		}
	}
	onClick = () => {
		count++;
		console.log(count);
		console.log(this.state);
		function setStateFunction(state, count) {
			const newState = {num: count};
			console.log(newState);
			return newState;
		}
	this.setState(setStateFunction(this.state, count));
	console.log(this.state);
	}
	
	render(){
		//const [state,setState] = useState(0);
		console.log("mad");
		var array = componentArr.map(({ key, text, buttonNum, textBox }) => (
						<SectionComponent key={key} style = {styles.section} onPress={this.onClick} text={text} buttonNum = {buttonNum} textBox = {textBox} /> 
						));
		console.log(array[count]);
		return (
			<View style = {styles.container}>
				<Button title='new entry' color = '#c71585' borderRadius = {4}/>
				<Button title='past entries' color = '#c71585' />
				<View style = {styles.frame}>
					{array[count]}
				</View>
				
			</View>
		);	
	}
}


class SectionComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			buttonNum: props.buttonNum,
			textBox: props.textBox,
			onClick: props.onPress,
		
		};
	}
	render() {
		var buttons = "";
		if (this.state.buttonNum == 0 & this.state.textBox == false) {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				</View>
			);
		} else if (this.state.buttonNum == 1 & this.state.textBox == true) {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				<input type='text' />
				<Button color = '#c71585' title = 'submit' onPress= {this.state.onClick} />
				</View>
				);
		} else if (this.state.textBox == false & this.state.buttonNum == 2) {
			var arr = ['yes','no'];
			var buttonArr = [];
			for (var x = 0; x < arr.length; x++) {
				buttonArr.push(<Button padding={10} margin={10} color = '#c71585' title = {arr[x]} onPress={this.state.onClick}/>);
			}
			return (
				<View style = {styles.section}>
				<Text padding = {10} margin={10}>{this.state.text}</Text>
				<View>
				{buttonArr}
				</View>
				</View>
			);
		} else {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				<View style = {styles.buttons}>
				{Array(this.state.buttonNum).fill(<Button color = '#c71585' title = 'maybe' onPress={this.state.onClick}/>)}
				</View>
				</View>
			
			);
		}
			
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdb4f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
	border: "4px solid mediumVioletRed",
	margin: 20,
	borderWidth: 4,
	width: 300,
	height: 400,
	borderRadius: 4,
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: 10,
	margin: 10
	
  },
  frame: {
	flexDirection: "row",
	justifyContent: 'center',
	alignItems: 'center',
	padding: 10,
	margin: 10
  },
  buttons: {
	margin: 20,
  }

});
