import './App.css'
import React from 'react'

import FirebaseListener from './controls/FirebaseListener'

import AppProvider from './AppProvider'
import TwoColumnLayout from './controls/TwoColumnLayout'
import LeftDrawer from './routes/LeftDrawer'
import MainContent from './routes/MainContent'

function App () {
  return (
    <AppProvider>
      <FirebaseListener />
      <TwoColumnLayout>
        <LeftDrawer />
        <MainContent />
      </TwoColumnLayout>

    </AppProvider>

  )
}

export default App
