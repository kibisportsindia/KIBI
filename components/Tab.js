import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TabV from './TabV';
import About from './About';

//const renderTabBar =()=> (<TabBar
//indicatorStyle={{backgroundColor:'green'}}
//style={{backgroundColor:'pink'}}/>);

const FirstRoute = () => (
  <TabV status="No posts yet" button="Add new posts" />
);

const SecondRoute = () => (
  <TabV status="No Services yet" button="Add new Services" />
);

const ThridRoute = () => (
  <TabV status="No Campaign started yet" button="Start a new campaign" />
);

const FourthRoute = () => (
  <About />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'Services' },
    { key: 'third', title: 'Funds' },
    { key: 'fourth', title: 'About' }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThridRoute,
    fourth: FourthRoute,
  });

  return (
    <TabView
      activeColor='red'
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    //renderTabBar={renderTabBar}
    />
  );
}