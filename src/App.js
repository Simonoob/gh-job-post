import React, { useState } from "react";
import "./App.css";
import FetchJobs from "./components/useFetchJobs";
import Loading from "./components/Loading";
import Job from "./components/Job";
import { Container } from "react-bootstrap";
import JobPages from "./components/Pagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = FetchJobs(params, page);

  return (
    <div className="App">
      <Container className="container my-5">
        <h1 className="mb-5">GitHub Jobs</h1>
        <JobPages page={page} setPage={setPage} hasNextPage={true} />
        {loading && <Loading />}
        {error && <h4 className="error">There was an error. Try Refreshing</h4>}
        {!loading &&
          !error &&
          jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        <JobPages page={page} setPage={setPage} />
      </Container>
    </div>
  );
}

export default App;
