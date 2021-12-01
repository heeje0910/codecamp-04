import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import LoginFormUI from "./Loginform.presenter";
import { LOGIN_USER } from "./Loginform.queries";

export default function LoginForm() {
  const router = useRouter();
  const { setAccessToken, accessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLElement>) {
    setMyPassword(event.target.value);
  }
  // async function onClickLogin() {
  //   const result = await loginUser({
  //     variables: {
  //       email: myEmail,
  //       password: myPassword,
  //     },
  //   });
  //   setAccessToken?.(result.data?.loginUser.accessToken || "");
  //   console.log("ggg")
  //   router.push("/boards");

  // }

  const handleLogin = async () => {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    setAccessToken?.(result.data?.loginUser.accessToken || "");
    router.push("/");
  };

  function onClickSignup() {
    router.push("/signup");
  }
  // 슬라이더 코드..
  

  return (
    <LoginFormUI
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      // onClcikLogin={onClickLogin}
      onClickSignup={onClickSignup}
      handleLogin={handleLogin}
      
    />
  );
}