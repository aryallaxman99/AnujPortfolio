import Image from "next/image";

import signIn from "@/assets/signIn.png";
import signUp from "@/assets/signUp.png";

const Auth = () => {
  return (
    <div className="pt-14 text-center">
      <h1 className="text-[39px] font-bold leading-[58.5px]">
        Log in and sign up flow
      </h1>
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-12 flex flex-col items-center">
        <Image className="mb-20 w-full h-auto" src={signIn} alt="sign in" />
        <Image className="w-full h-auto" src={signUp} alt="sign up" />
      </div>
    </div>
  );
};

export default Auth;
