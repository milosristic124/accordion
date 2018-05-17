import { 
    StyleSheet, 
    Dimensions, 
    Platform 
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
const {width, height} = Dimensions.get('window');
var headerTitleWidth = deviceWidth-120;

module.exports = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    },
    categoryContainer: {
        flex: 1,
        position: 'absolute',
        top: 30,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 30,
        width: width - 20,
    },
    category: {
        flex: 1,
        flexDirection: 'row',        
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopColor: 'gray',
        borderTopWidth: 1,
    },
    categoryLeft: {
        flexDirection: 'row',
    },
    categoryRight: {
        flexDirection: 'row',
    },
    categoryText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '800',
        marginRight: 20,
    },
    dropImage: {
        
    },
    summaryGroupsContainer: {
        paddingLeft: 20,
        paddingRight: 40,
    },
    summaryGroups: {
        flex: 1,
        flexDirection: 'row',        
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    summaryGroupsLeft: {
        flexDirection: 'row',
    },
    summaryGroupsRight: {
        flexDirection: 'row',
    },
    summaryGroupsText: {
        color: 'white',
        marginRight: 20,
        fontSize: 14,
    },

    subGroupsContainer: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: '#006699'
    },
    subGroups: {
        flex: 1,
        flexDirection: 'row',        
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
    },
    subGroupsLeft: {
        flexDirection: 'row',
    },
    subGroupsRight: {
        flexDirection: 'row',
    },
    subGroupsText: {
        color: 'white',
        marginRight: 20,
        fontSize: 11,
    },
});