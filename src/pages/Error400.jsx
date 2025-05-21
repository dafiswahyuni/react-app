import ErrorPage from "../components/ErrorPage";

export default function Error400() {
  return (
    <ErrorPage 
      errorCode="400"
      errorDescription="Permintaan tidak valid. Silakan cek kembali input atau URL Anda."
      errorImage="/img/400-error.svg"
    />
  );
}
