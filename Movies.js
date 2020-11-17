import React from 'react';
import {Text, View, Image} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

class Movies extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}

const MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <Movies title={movie.title} year={movie.year} poster={movie.poster} />
    );
  });
};

export {MovieList};
