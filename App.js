import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MovieList} from './Movies.js';
import {BoatList} from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises</Text>
      <MovieList />
      {/*<BoatList />*/}
    </ScrollView>
  );
};
export default App;
