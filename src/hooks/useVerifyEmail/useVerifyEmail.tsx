import axios from "@/services/axios";
import { useSearchParams } from "next/navigation";
const useVerifyEmail = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("url");

  const verify = (url: string) => {
    axios.get(url).then((response) => console.log(response));
  };

  if (search) verify(search);
};

export default useVerifyEmail;
