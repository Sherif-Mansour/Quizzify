import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const categories = [
  {id: 1, name: 'Animals', icon: require('../assets/images/AnimalsIcon.png')},
  {
    id: 2,
    name: 'Geography',
    icon: require('../assets/images/GeographyIcon.png'),
  },
  {id: 3, name: 'Grammar', icon: require('../assets/images/GrammarIcon.png')},
  {id: 4, name: 'History', icon: require('../assets/images/HistoryIcon.png')},
  {id: 5, name: 'Music', icon: require('../assets/images/MusicIcon.png')},
  {id: 6, name: 'Sports', icon: require('../assets/images/SportsIcon.png')},
  {id: 7, name: 'Science', icon: require('../assets/images/ScienceIcon.png')},
  {id: 8, name: 'Maths', icon: require('../assets/images/MathsIcon.png')},
  {id: 9, name: 'Movies', icon: require('../assets/images/MoviesIcon.png')},
  {id: 10, name: 'Art', icon: require('../assets/images/ArtIcon.png')},
];

const CategoryScreen = ({navigation}) => {
  const handleCategorySelect = categoryName => {
    navigation.navigate('Quiz', {category: categoryName});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategorySelect(item.name)}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a Category</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0569B0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryList: {
    alignItems: 'center',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#47B2FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '45%',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CategoryScreen;
