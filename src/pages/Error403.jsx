import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage 
      errorCode="403"
      errorDescription="Anda tidak memiliki izin untuk mengakses halaman ini."
      errorImage="/img/403-error.svg"
    />
  );
}
