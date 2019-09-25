import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';

export const cardData = [
  {
    name: 'device 1',
    data: {
      heroValue: 10,
      loadValue: 20,
      battery: 12,
      channels: [
        {
          label: 'Temperature',
          value: 68,
          units: '°F',
          icon: <MatIcon name={'wb-sunny'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Voltage',
          value: 480,
          units: 'V',
          icon: <MatIcon name={'brightness-high'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Current',
          value: 15,
          units: 'A',
          icon: <MatIcon name={'wb-incandescent'} size={24} style={{marginRight: 10}} />,
        },
      ],
    },
  },
  {
    name: 'device 2',
    data: {
      heroValue: 100,
      loadValue: 33,
      battery: 52,
      channels: [
        {
          label: 'Temperature',
          value: 68,
          units: '°F',
          icon: <MatIcon name={'wb-sunny'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Voltage',
          value: 480,
          units: 'V',
          icon: <MatIcon name={'brightness-high'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Current',
          value: 15,
          units: 'A',
          icon: <MatIcon name={'wb-incandescent'} size={24} style={{marginRight: 10}} />,
        },
      ],
    },
  },
  {
    name: 'device 3',
    data: {
      heroValue: 72,
      loadValue: 98,
      battery: 98,
      channels: [
        {
          label: 'Temperature',
          value: 69,
          units: '°F',
          icon: <MatIcon name={'wb-sunny'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Voltage',
          value: 492,
          units: 'V',
          icon: <MatIcon name={'brightness-high'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Current',
          value: 14.6,
          units: 'A',
          icon: <MatIcon name={'wb-incandescent'} size={24} style={{marginRight: 10}} />,
        },
      ],
    },
  },
  {
    name: 'device 4',
    data: {
      heroValue: 0,
      loadValue: 20,
      battery: 12,
      channels: [
        {
          label: 'Temperature',
          value: 50,
          units: '°F',
          icon: <MatIcon name={'wb-sunny'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Voltage',
          value: 680,
          units: 'V',
          icon: <MatIcon name={'brightness-high'} size={24} style={{marginRight: 10}} />,
        },
        {
          label: 'Output Current',
          value: 13,
          units: 'A',
          icon: <MatIcon name={'wb-incandescent'} size={24} style={{marginRight: 10}} />,
        },
      ],
    },
  },
];
export const emptyData = [{}, {}, {}, {}];
