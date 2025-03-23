import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}