import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

export const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <div>
      <NavBar></NavBar>
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map((p) => <div key={p.id}>{[p.title]}</div>)
      )}
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
