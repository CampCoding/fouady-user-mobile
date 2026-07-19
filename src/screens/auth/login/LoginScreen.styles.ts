import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.foreground,
  },
  LangBtn:{
    paddingHorizontal:10,
    paddingVertical:5,
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
    margin:20,
    width:'100%',
    padding:20,
    backgroundColor:colors.second_background,
    
  },
  SelectType:{
    flexDirection:'row',
    gap:5,
    justifyContent:'space-between',
    borderRadius:20,
    borderColor:colors.primary,
    borderWidth:1,
    width:'100%',
    height:88,
    alignItems:'center',
    padding:10,
    marginTop:10,

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
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.gray,
    borderWidth: 1,
    borderColor: colors.gray,
    fontSize: 14,
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
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
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
    flexDirection:'row',
    justifyContent:'space-between',
    gap:10,
  },
  FooterSectionBtn:{
    padding:5,
    flexDirection:'row',
    alignItems:'center',
    
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
