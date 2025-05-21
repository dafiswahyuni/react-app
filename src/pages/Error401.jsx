import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage 
      errorCode="401"
      errorDescription="Anda belum melakukan otentikasi untuk mengakses halaman ini."
      errorImage="/img/401-error.svg"
    />
  );
}
