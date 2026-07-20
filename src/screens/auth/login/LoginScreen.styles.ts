import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../theme';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.foreground,
  },
  LangBtn:{
    paddingHorizontal:'10@s',
    borderRadius:20,
    borderColor:colors.primary,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:10,

  },
  content:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    borderColor:colors.primary,
    borderWidth:1,
    marginHorizontal:'10@s',
    marginTop:'10@s',
    width:'100%',
    padding:'20@s',
    backgroundColor:colors.second_background,
    
  },
  SelectType:{
    flexDirection:'row',
    gap:'5@s',
    justifyContent:'space-between',
    borderRadius:20,
    borderColor:colors.primary,
    borderWidth:1,
    width:'100%',
    height:'70@vs',
    alignItems:'center',
    padding:'10@ms',
    marginTop:'10@vs',

  },
  typeBnt:{
    padding:10,
    width:'auto',
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
    
  },
  activeTypeBnt:{
    padding:10,
    backgroundColor:colors.primary,
    borderRadius:20,
    color:colors.background,
    width:'auto',
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
  },
  activetypeTitle:{
    color:colors.lightBlack,
    textAlign:'center',
  },
  typeTitle:{
    color:colors.white,
    textAlign:'center',
  },
  activeTypeDes:{
    color:colors.darkGray3,
    textAlign:'center',
    fontSize:12,
  },
  typeDes:{
    color:colors.gray,
    textAlign:'center',
    fontSize:12,
    
  },
  form: {
    width: '100%',
    gap: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  formInput: {
    width: '100%',
    borderRadius: 12,
    paddingHorizontal: '16@s',
    paddingVertical: '12@vs',
    color: colors.gray,
    borderWidth: 1,
    borderColor: colors.gray,
    fontSize: '14@ms',
    textAlign: 'right',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  passwordInput: {
    color: colors.gray,
    paddingVertical: 0,
    paddingHorizontal: 0,
    fontSize: 14,
    textAlign: 'right',
  },
  eyeButton: {
    width: '24@s',
    height: '24@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8@s',
    flexShrink: 0,
  },
  formBtn: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  formBtnText: {
    color: colors.lightBlack,
    fontWeight: '700',
  },
  FooterSection:{
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    gap:'8@s',
    marginTop: '10@vs',
    paddingRight:'10@s',
  },
  FooterSectionBtn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'33%'
  },
  errorText: {
    color: '#a30407ff',
    fontSize: 12,
    textAlign: 'right',
    width: '100%',
    marginTop: -8,
  },
  formInputError: {
    borderColor: '#a30407ff',
  },

});
