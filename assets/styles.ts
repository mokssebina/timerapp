import { StyleSheet } from "react-native"

export const appBackground = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    }

})

export const createButton = StyleSheet.create({

    button: {
        height: 40,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 2
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }

})

export const createPageHeader = StyleSheet.create({

    header: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        justifyContent: 'space-between',
    },
    closeButton: {
        width: 45,
        height: 45,
        padding: 8
    },
    addButton: {
        width: 45,
        height: 45,
        padding: 8
    }

})

export const createPageModal = StyleSheet.create({
    
    
    background: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e1e1e1',
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        justifyContent: 'space-between',
    },
    modalTitle: {
        width: 100,
        height: 45,
        padding: 8,
        fontWeight: 'bold',
        fontSize: 16
    },
    closeButton: {
        width: 45,
        height: 45,
        padding: 8
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    }

})