import { StyleSheet } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import LangSection from './components/lang_section';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  LangSection:{
  width: '100%',
  alignItems: 'center',
  marginBottom:scale(10),
  marginTop:scale(10)},

  langExpandedContainer: {
   flexDirection: 'row', 
   alignItems:'center',
  gap: 5,
   marginTop: 10, 
   alignSelf: 'center',
   width: '94%',
  },
  ExpandedContainer: {
   flexDirection: 'row', 
  gap: 5,
   marginTop: 10, 
   alignSelf: 'center',
   width: '94%',
  },
  saveBnt:{
    marginTop:10,
    marginLeft:'10@s'
  }

});
