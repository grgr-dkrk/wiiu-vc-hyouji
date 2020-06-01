import * as React from 'react'
import { GlobalStyle } from './styles/global'
import { MainLayout } from './layouts'
import { DataTable } from './containers/DataTable'

export const App = () => (
  <>
    <GlobalStyle />
    <MainLayout>
      <DataTable />
    </MainLayout>
  </>
)
