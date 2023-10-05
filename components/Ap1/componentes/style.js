import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: '45vh',
    },
    texto: {
        color: '#fff',
    },
    header: {
        alignItems: 'left',
        justifyContent: 'left',
        color: 'lightgray',
        fontSize: 15,
        margin: 10,
    },
    bloco: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'darkgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
        margin: 10
    },
    nomepreco: {
        color: 'white',
        fontSize: 45,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    datahora: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
    },
})

export default styles