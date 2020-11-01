import {Platform} from 'react-native';

export const fonts = {
  proximaNova: Platform.OS === 'ios' ? 'Proxima Nova' : 'ProximaNova',
  revival: Platform.OS === 'ios' ? 'Revivl555 BT' : 'Revival',
};
