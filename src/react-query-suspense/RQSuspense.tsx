import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQueries,
} from "@tanstack/react-query";
import { Suspense } from "react";

const queryClient = new QueryClient();

function RQSuspense() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div>React-query Suspense Example</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default RQSuspense;

const slowFetcher = async (url: string) => {
  const startTime = Date.now();
  const response = await fetch(url);
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return { data, startTime };
};

function Profile() {
  const [{ data: user }, { data: posts }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["userData"],
        queryFn: () =>
          slowFetcher("https://jsonplaceholder.typicode.com/users/1"),
      },
      {
        queryKey: ["postsData"],
        queryFn: () =>
          slowFetcher("https://jsonplaceholder.typicode.com/posts?userId=1"),
      },
    ],
  });

  console.log(user, posts);

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
