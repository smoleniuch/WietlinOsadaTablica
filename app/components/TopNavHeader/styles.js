import {

  BACKGROUND_COLOR,
  TEXT_COLOR,
  BORDER_COLOR

} from 'styles/common'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    borderStyle:'solid',


  },

  header:{

    color:TEXT_COLOR,
    fontFamily:'kalam',
    fontSize:40,
    fontWeight:"bold",

  }
});
