export function convertPathToQuery(path) {
  const query = path.split("?")[1];
  const queries = {};
  query.split("&").forEach((q) => {
    const splitQuery = q.split("=");
    const key = splitQuery[0];
    queries[key] = splitQuery[1];
  });
  return queries;
}
