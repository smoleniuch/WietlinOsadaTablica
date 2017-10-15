import {StyleSheet} from 'react-native'

import {

  BACKGROUND_COLOR,
  TEXT_COLOR,
  BORDER_COLOR

} from 'styles/common'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    borderStyle:'solid',
    borderWidth:5,
    borderColor:BORDER_COLOR
  },

  header:{

    flex:0.1,
    alignContent:'flex-end',
    justifyContent:'flex-end',
    flexDirection:'row',
    borderBottomWidth:2,
    borderColor:BORDER_COLOR

  },

  navHeader:{

    flex:0.8,
    flexDirection:'column'

  },

  menuButton:{

    flex:0.2,
    flexDirection:'column'

  },

  body:{

    flex:0.9

  }




});
