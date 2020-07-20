import React, { useState } from "react";
import "./App.css";
import FetchJobs from "./components/useFetchJobs";
import Loading from "./components/Loading";
import Job from "./components/Job";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = FetchJobs(params, page);

  return (
    <div className="App">
      <div className="container">
        {loading && <Loading />}
        {error && <h1>There was an error. Try Refreshing</h1>}
        {!loading &&
          !error &&
          jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
      </div>
    </div>
  );
}

export default App;
