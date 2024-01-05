import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>Hello</div>
      <div>
        <Link to="/swr-suspense">SWR Suspense</Link>
      </div>
      <div>
        <Link to="/react-query-suspense">RQ Suspense</Link>
      </div>
    </>
  );
}

export default App;
