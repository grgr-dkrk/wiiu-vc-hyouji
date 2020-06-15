import * as React from 'react'
import { GlobalStyle } from './styles/global'
import { MainLayout } from './layouts'
import { DataTable } from './containers/DataTable'
import Recoil from 'recoil' // TODO: wait for ESM

export const App = () => (
  <>
    <GlobalStyle />
    <Recoil.RecoilRoot>
      <MainLayout>
        <DataTable />
      </MainLayout>
    </Recoil.RecoilRoot>
  </>
)
