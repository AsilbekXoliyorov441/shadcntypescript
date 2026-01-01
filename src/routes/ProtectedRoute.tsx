import { Navigate } from "react-router-dom"
import DashboardLayouts from "../components/DashboardLayouts"


const ProtectedRoute = () => {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)
  return token ? <DashboardLayouts/> : <Navigate to="/login" replace />
}

export default ProtectedRoute