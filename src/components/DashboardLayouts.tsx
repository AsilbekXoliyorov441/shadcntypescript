import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom';

const DashboardLayouts = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Header/>
        <main className="flex-1 pl-64 pt-10 bg-muted/40">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayouts