import useSWR from "swr";
import ContainerLayout from "../components/ContainerLayout";
import DashboardLayout from "../components/DashboardLayout";
import EmptyPoll from "../components/EmptyPoll";
import PollTable from "../components/PollTable";
import PollTableSkeleton from "../components/PollTableSkeleton";
import { useAuth } from "../lib/auth";
import fetcher from "../utils/fetcher";

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR("/api/polls", fetcher);

  if (!data) {
    return (
      <ContainerLayout>
        <DashboardLayout>
          <PollTableSkeleton />
        </DashboardLayout>
      </ContainerLayout>
    );
  }

  return (
    <ContainerLayout>
      <DashboardLayout>
        {data.polls.length > 0 ? (
          <PollTable polls={data.polls} />
        ) : (
          <EmptyPoll />
        )}
      </DashboardLayout>
    </ContainerLayout>
  );
};

export default Dashboard;
