import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

type Props = {};

const App = dynamic(() => import("./app"), { ssr: false });
const AdminPage = (props: Props) => {
  if (!isAdmin()) {
    redirect("/");
  }
  return <App />;
};

export default AdminPage;
