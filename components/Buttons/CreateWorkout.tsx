import React from 'react'
import { Pressable, Text } from 'react-native'
import AddIcon from '@mui/icons-material/Add';
import { createButton } from '../../assets/styles'


interface Props {
    onPress: () => void
}


const CreateWorkout: React.FC<Props> = ({ onPress }) => {

    return (
        <Pressable onPress={onPress} style={createButton.button}>
            <AddIcon />
            <Text style={createButton.buttonText}>New Workout</Text>
        </Pressable>
    )
}

export default CreateWorkout