import useSWR from "swr";

const baseURL = "http://localhost:3000/";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function useFetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);
  // const promise = await fetch(`${baseURL}${endpoint}`);
  // let data = await promise.json();
  // return { data };

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
