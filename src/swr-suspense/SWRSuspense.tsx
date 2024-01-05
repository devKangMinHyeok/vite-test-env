import { Suspense } from "react";
import useSWR from "swr";

function SWRSuspense() {
  return (
    <div>
      <div>SWR Suspense Example</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}

export default SWRSuspense;

const slowFetcher = async (url: string) => {
  const startTime = Date.now();
  const response = await fetch(url);
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return { data, startTime };
};

function Profile() {
  const { data: user } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    slowFetcher
    // { suspense: true }
  );

  const { data: posts } = useSWR(
    "https://jsonplaceholder.typicode.com/posts?userId=1",
    slowFetcher
    // { suspense: true }
  );

  return (
    <div>
      <div>
        data : {user?.data?.name} fetch startTime : {user?.startTime}
      </div>
      <div>
        {posts?.data?.length} fetch startTime : {posts?.startTime}
      </div>
    </div>
  );
}
