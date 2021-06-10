import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Categorias from './src/views/Categorias';
import RepertorioList from './src/views/RepertorioList';
import FormMusic from './src/views/FormMusic';
import NewCategory from './src/views/NewCategory';
import VideoPlayer from './src/views/VideoPlayer';

//console.disableYellowBox = true

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Categorias,
      RepertorioList,
      FormMusic,
      NewCategory,
      VideoPlayer,
    },
    {
      resetOnBlur: false,
      backBehavior: 'history',
    },
  ),
);

export default function App() {
  return <Routes />;
}
