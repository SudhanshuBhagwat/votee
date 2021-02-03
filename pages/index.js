import Router from "next/router";
import ContainerLayout from "../components/ContainerLayout";
import Landing from "../components/Landing";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  if (auth.user) {
    Router.push("/dashboard");
  }

  if (!auth.user) {
    return (
      <ContainerLayout>
        <Landing />
      </ContainerLayout>
    );
  }
}
