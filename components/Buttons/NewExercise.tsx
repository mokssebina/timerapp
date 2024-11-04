import React from 'react'
import { Pressable, Text } from 'react-native'
import AddIcon from '@mui/icons-material/Add';
import { createPageHeader } from '../../assets/styles'

interface Props {
    onPress: () => void
}

const NewExercise: React.FC<Props> = ({onPress}) => {
    return (
        <Pressable onPress={onPress} style={createPageHeader.addButton}>
            <AddIcon />
        </Pressable>
    )
}

export default NewExercise