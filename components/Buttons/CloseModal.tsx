import React from 'react'
import { Pressable, Text } from 'react-native'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { createPageHeader } from '../../assets/styles'


interface Props {
    onPress: () => void
}


const CloseModal: React.FC<Props> = ({ onPress }) => {

    return (

        <Pressable onPress={onPress} style={createPageHeader.closeButton}>
            <CloseIcon />
        </Pressable>

    )

}

export default CloseModal