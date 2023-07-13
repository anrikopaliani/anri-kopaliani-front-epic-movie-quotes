import { useCallback, useEffect } from "react";
import axios from "@/services/axios";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleActivatedModal } from "@/redux/features";

const useVerifyEmail = () => {
  const { activatedModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const search = searchParams.get("url");

  const verify = useCallback(
    (url: string) => {
      axios.get(url).then((response) => console.log(response));
      dispatch(toggleActivatedModal());
    },
    [dispatch]
  );

  useEffect(() => {
    if (search) {
      verify(search);
    }
  }, [search, verify]);

  return { activatedModal };
};

export default useVerifyEmail;
