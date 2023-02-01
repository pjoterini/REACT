import React from "react";
import { useRouter } from "next/router";

interface postIdProps {}

const postId: React.FC<postIdProps> = ({}) => {
  const router = useRouter();
  let id = router.query.postId;
  return (
    <>
      <div>certain post</div>;{id}
    </>
  );
};

export default postId;
