import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';




export default function CategoryScreen({ navigation}) {
    const categories = [
         "Grammar",
         "History", 
         "Geography",
         "Sports", 
         "Music", 
         "Animals", 
    ];





    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style= {styles.headerText}>Select the category you would like to be quizzed on below:</Text>
        <View style={styles.categoryContainer}>
        {categories.map((category) => (
            <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => navigation.navigate('Quiz', { category })}
            >
            <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
        ))}
        </View>
        </View>
        </ScrollView>
        
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#0569b0',
        padding: 10,
    },

    headerText: {
        
        display: 'flex',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
        color: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#0096FF',
        paddingVertical: 12,
    },

    categoryContainer: {
        display: 'flex',
        justifyContent: 'center',
    
    },

    categoryButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0096FF',
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },

    categoryText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        padding: 19,
    },
});