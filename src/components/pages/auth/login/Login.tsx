import { Logo } from "@src/components/ui";
import { Form } from "@src/components/pages/auth";
import { Input } from "@src/components/ui/input";

export const Login = () => {
  return (
    <Form handleSubmit={() => console.log("form submit")} button="Continue">
      <Logo />
      <div className="w-full text-center space-y-2">
        <h1 className="text-xl font-extrabold antialiased leading-relaxed">
          Login in to App Name
        </h1>
        <p className="text-sm text-foreground-100">
          Welcome back! Please log in to continue
        </p>
      </div>
      <Input
        name="email"
        label="Email address"
        placeholder="Enter your email address"
      />
    </Form>
  );
};
