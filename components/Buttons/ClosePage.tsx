import React from 'react'
import { Pressable, Text } from 'react-native'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createPageHeader } from '../../assets/styles'


interface Props {
    onPress: () => void
}


const ClosePage: React.FC<Props> = ({ onPress }) => {

    return (

        <Pressable onPress={onPress} style={createPageHeader.closeButton}>
            <ArrowBackIosIcon />
        </Pressable>

    )

}

export default ClosePage