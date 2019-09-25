import * as React from 'react';
import { View, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  HeroBanner,
  Hero,
  ThemeProvider,
  ChannelValue,
  Header,
  Title,
} from '@pxblue/react-native-components';
import { getIcon, getColor, getGradeColor } from './utilities/utilities';
import { rntheme } from './utilities/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeroPlaceholder from './components/placeholder';
import { cardData, emptyData } from './data/cardData';
import * as PXBColors from '@pxblue/colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: emptyData,
    };
  }
  componentDidMount() {
    this.refreshData();
  }
  refreshData() {
    this.setState({ data: emptyData }, () =>
      setTimeout(() => this.setState({ data: cardData }), 3000)
    );
  }
  getCardContent(device) {
    if (device.name === undefined) return <HeroPlaceholder />;
    else
      return (
        <React.Fragment>
          <HeroBanner style={{ padding: 200 }}>
            <Hero
              label={'Grade'}
              icon={
                <Text
                  style={{
                    fontSize: 36,
                    color: getGradeColor(device.data.heroValue),
                  }}>
                  {getIcon(device.data.heroValue)}
                </Text>
              }
              value={device.data.heroValue.toString()}
              units={'/100'}
            />
            <Hero
              label={'Load'}
              icon={
                <Icon
                  name={'chart-pie'}
                  size={36}
                  color={getColor(device.data.loadValue)}
                />
              }
              value={device.data.loadValue.toString()}
              units={'%'}
            />
            <Hero
              label={'Battery'}
              icon={
                <Icon
                  name={'battery-50'}
                  size={36}
                  color={getColor(device.data.battery)}
                />
              }
              value={device.data.battery.toString()}
              units={'%'}
            />
          </HeroBanner>
          {device.data.channels.map((channel, cind) => (
            <ListItem
              key={`_c${cind}`}
              topDivider
              leftIcon={channel.icon}
              title={<Title>{channel.label}</Title>}
              rightElement={
                <ChannelValue value={channel.value} units={channel.units} />
              }
            />
          ))}
        </React.Fragment>
      );
  }
  render() {
    return (
      <ThemeProvider theme={rntheme}>
        <View
          style={{
            backgroundColor: PXBColors.blue[500],
            paddingTop:
              Platform.OS === 'android' ? getStatusBarHeight(false) : 0,
          }}>
          <Header
            expandable={false}
            title={'Loading Example'}
            navigation={{ icon: 'menu' }}
            actionItems={[
              { icon: 'refresh', onPress: () => this.refreshData() },
            ]}
          />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.innerContainer}>
          {this.state.data.map((device, dind) => (
            <Card
              key={`device${dind}`}
              containerStyle={device.name ? { padding: 0 } : {}}>
              {this.getCardContent(device)}
            </Card>
          ))}
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
  },
  innerContainer: {
    paddingBottom: 10,
  },
});
