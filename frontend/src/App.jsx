import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LoadingState from './components/common/LoadingState'

const Dashboard = lazy(() => import('./pages/Dashboard'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/:username"
          element={
            <Suspense fallback={<LoadingState />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
