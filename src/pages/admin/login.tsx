import { SubmitHandler, useForm } from "react-hook-form";
import Bg from "~/components/background";
import { header } from "~/styles/fonts";
import { toast } from "sonner";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken, signIn } from "next-auth/react";

type FormValues = {
  nim: string;
  password: string;
};

const Login = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      nim: "",
      password: "",
    },
  });

  const handleLoggedIn = () => {
    toast.success("Logged in", { duration: 2000 });
  };

  const handleRedirect = () => {
    console.log("redirect");
  };

  const onSubmit: SubmitHandler<FormValues> = async (data, e) => {
    e?.preventDefault();
    const res = await signIn("credentials", {
      nim: data.nim,
      password: data.password,
      redirect: false,
      csrfToken,
    });

    if (res?.error) {
      toast.error(res.error, { duration: 2000 });
      reset({ nim: "", password: "" })
      return;
    }
    handleLoggedIn();
  };
  return (
    <div className="dusty-bg flex flex-col items-center justify-center">
      <Bg />
      <form
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
        className="flex w-[75vw] max-w-96 flex-col items-center gap-4 rounded-xl bg-teal-2/70 py-8 shadow-md shadow-teal-3/75 drop-shadow-2xl md:gap-6 md:py-10"
      >
        <h1 className={`${header.className} text-custom`}>Admin - Login</h1>
        <div className="w-60 space-y-4 *:w-full">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input
            type="text"
            placeholder="username"
            className=" rounded-lg border-2 bg-teal-3/90 px-4 py-2 text-brown-1 outline-1 outline-brown-1 placeholder:text-brown-1 "
            {...register("nim", { required: "This is required" })}
          />
          <input
            type="password"
            placeholder="password"
            className=" rounded-lg border-2 bg-teal-3/90 px-4 py-2 text-brown-1 outline-1 outline-brown-1 placeholder:text-brown-1 "
            {...register("password", { required: "This is required" })}
          />
        </div>
        <button
          type="submit"
          disabled={!isDirty || isSubmitting || !isValid}
          className="rounded border bg-blue-4 px-5 py-1.5 text-brown-1 hover:bg-teal-3/90 disabled:cursor-not-allowed disabled:bg-blue-4/90 disabled:text-red-3 disabled:line-through disabled:transition-colors "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
};

export default Login;