import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Component } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MainComponent />
      <StatusBar style="auto" />
	</View>
  );
}
class MainComponent extends React.Component {
	render(){
		return (
			<View style = {styles.container}>
				<Button title='new entry' color = '#c71585' margin = {20} borderRadius = {4} />
				<Button title='past entries' color = '#c71585' />
				<View style = {styles.frame}>
					<SectionComponent text = "how are you feeling today?" 
						buttonNum = {3} textBox = {false} />
					<SectionComponent text = "what did you eat today?" 
						buttonNum = {1} textBox = {true} />
					<SectionComponent text = "did you take a shower?" 
						buttonNum = {2} textBox = {false} />
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
			textBox: props.textBox
		
		};
	}
	render() {
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
				<Button color = '#c71585' title = 'submit' />
				</View>
				);
		} else if (this.state.textBox == false) {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				<Button color = '#c71585' title = 'submit' />
				</View>
			);
		} else {
			return (
				<View style = {styles.section}>
				<Text>{this.state.text}</Text>
				<Button color = '#c71585' title = 'submit' />
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
	flexDirection: "row"
  }

});
