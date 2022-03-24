import ErrorPages from "../components/ErrorPages";

export default function Custom500() {
  return (
    <ErrorPages image="500.svg">500 - Server-side error occurred</ErrorPages>
  );
}
