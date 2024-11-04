import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from "react-native";
import { createPageHeader, createButton, appBackground } from '../assets/styles'
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import { FAB } from 'react-native-paper';
import CreateWorkout from '@/components/Buttons/CreateWorkout';
import ClosePage from '@/components/Buttons/ClosePage';
import NewExercise from '@/components/Buttons/NewExercise';
import CreateModal from '@/components/Modals/CreateModal';




export default function Index() {

  const [create, setCreate] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const openCreateView = () => {
    setCreate(true)
  }

  const closeCreateView = () => {
    setCreate(false)
  }

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  return (
    <>
      {create ?
        <View style={appBackground.background}>

          <View style={createPageHeader.header}>

            <ClosePage onPress={closeCreateView} />

            <NewExercise onPress={openModal} />

          </View>

          <CreateModal onPress={closeModal} isVisible={isVisible} />

        </View>
        :
        <View style={appBackground.background}>

          <CreateWorkout onPress={openCreateView} />

        </View>
      }
    </>
  );
}


