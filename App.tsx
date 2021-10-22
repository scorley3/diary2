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
	{ text: "did you brush your teeth?" , buttonNum : 2, textBox : false},
	{ text: "did you sleep enough?" , buttonNum : 2, textBox : false},
	{ text: "what homework do you have?" , buttonNum : 1, textBox : true},
	{ text: "do you have any tests tomorrow?" , buttonNum : 2, textBox : false},
	{ text: "how are you feeling today?" , buttonNum : 3, textBox : false},
	{ text: "what did you eat today?" , buttonNum : 1, textBox : true},
	{ text: "did you take a shower?" , buttonNum : 2, textBox : false},


]

var count = 0;
class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			num: 0
		}
		this.setState = () => {
			num: 1
		}
	}
	onClick = () => {
	count++;
	console.log(count);
	setState({});
	}
	render(){
		//const [state,setState] = useState(0);
		var array = componentArr.map(({ text, buttonNum, textBox }) => (
						<SectionComponent style = {styles.section} onPress={this.onClick} text={text} buttonNum = {buttonNum} textBox = {textBox} /> 
						));
		
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
				<Button color = '#c71585' title = 'submit' onPress= {props.onClick} />
				</View>
				);
		} else if (this.state.textBox == false & this.state.buttonNum == 2) {
			var arr = ['yes','no'];
			var buttonArr = [];
			for (var x = 0; x < arr.length; x++) {
				buttonArr.push(<Button color = '#c71585' title = {arr[x]} onPress={this.state.onClick}/>);
			}
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				{buttonArr}
				</View>
			);
		} else {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				{Array(this.state.buttonNum).fill(<Button color = '#c71585' title = 'maybe' />)}
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
	width: 200,
	height: 400,
	borderRadius: 4,
	justifyContent: 'center',
	alignItems: 'center',
	
  },
  frame: {
	flexDirection: "row",
	justifyContent: 'center',
	alignItems: 'center',
  }

});
