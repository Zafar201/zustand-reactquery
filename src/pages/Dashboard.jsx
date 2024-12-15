import UsersList from "../compoenents/dashboard/UsersList";
import DashboardLayout from "../compoenents/Layout/DashboardLayout";


const Dashboard = () => {
  return (
    <DashboardLayout>
      <UsersList />
    </DashboardLayout>
  );
};

export default Dashboard;