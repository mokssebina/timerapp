import React from 'react'
import { View, Modal, Text } from 'react-native'
import { Select, MenuItem } from '@mui/material'
import { appBackground, createPageModal } from '../../assets/styles'
import ClosePage from '../Buttons/ClosePage'
import CloseModal from '../Buttons/CloseModal'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker'


interface Props {
    isVisible: boolean,
    onPress: () => void
}

const CreateModal: React.FC<Props> = ({isVisible, onPress}) => {

    const types = [
        {id: '1', value: 'Normal'},
        {id: '2', value: 'Superset'}
    ]

    return (

        <Modal animationType="slide" presentationStyle='pageSheet' style={createPageModal.background} visible={isVisible}>

            <View style={createPageModal.header}>

                <Text style={createPageModal.modalTitle}>Exercise</Text>

                <CloseModal onPress={onPress} />

            </View>

            <View style={createPageModal.content}>

                <Text>Exercise Type</Text>

                <Select>
                    {types.map((item: any) => (
                        <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                    ))}
                </Select>

                <RNDateTimePicker value={new Date} onChange={() => {}} mode='time' />

            </View>

        </Modal>
    )
}

export default CreateModal