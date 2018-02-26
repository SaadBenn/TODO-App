import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
    <View key={this.props.value} style={styles.note}>
        <Text style={styles.text}>{this.props.val.date}</Text>
        <Text style={styles.text}>{this.props.val.note}</Text>
        
        <TouchableOpacity onPress={this.props.onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    text: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#008080'
    },
    deleteButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteButtonText: {
        color: 'white'
    }
});
