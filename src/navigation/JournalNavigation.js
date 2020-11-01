import {createStackNavigator, createAppContainer} from 'react-navigation';
import JournalDetail from '../screens/JournalDetail';
import JournalList from '../screens/JournalList';
import Map from '../screens/Map';
import NewJournal from '../screens/NewJournal';
import Colors from '../constants/Colors';

const JournalNavigator = createStackNavigator(
  {
    Journals: JournalList,
    JournalDetail,
    Map,
    NewJournal,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.darkBackground,
      },
      headerTintColor: Colors.darkGreyBackground,
    },
  },
);

export default createAppContainer(JournalNavigator);
