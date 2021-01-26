import './App.css'
import React from 'react'

import FirebaseListener from './routes/FirebaseListener'

import AppProvider from './AppProvider'
import TwoColumnLayout from './controls/TwoColumnLayout'
import LeftDrawer from './routes/LeftDrawer'
import MainContent from './routes/MainContent'
import Title from './routes/Title'

function App () {
  return (
    <AppProvider>
      <FirebaseListener />
      <TwoColumnLayout>
        <Title />
        <LeftDrawer />
        <MainContent />
      </TwoColumnLayout>

    </AppProvider>

  )
}

export default App
