import { trpc } from "./utils/trpc";

export default function IndexPage() {
  const userQuery = trpc.helloWorld.useQuery();

  return <div>{userQuery.data}</div>;
}
