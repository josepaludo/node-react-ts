import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './store/store.ts'
import { router } from './router/router.tsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root')!) 

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <RouterProvider router={router} />
        </ReduxProvider>
    </React.StrictMode>,
)
