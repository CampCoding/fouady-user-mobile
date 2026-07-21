import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:verticalScale(60),
    
    width:'100%'
  },
  header:{
    width:'100%',
    alignItems: 'center',
    marginBottom:verticalScale(10),
    paddingHorizontal:scale(10),
  },
  img:{
    width:scale(150),
    height:verticalScale(150)
  },
  changePasswordContainer:{
    width:'100%',
    marginTop:scale(30)
  },
  form: {
    width: '100%',
    gap: 12,
    alignItems: 'center',
  },
  submitButton:{
    marginTop:verticalScale(20),
    width:scale(120)
  }
});
