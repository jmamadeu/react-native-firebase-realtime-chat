import { Block, Typography } from "~/components";
import { Button } from "~/components/button";

export default function SignIn() {
  return (
    <Block center>
      <Block justifyContent="space-between" flex={1} py={60} px={26}>
        <Block></Block>
        <Block gap={16}>
          <Typography
            style={{
              textAlign: "center",
              color: "#323539",
              fontSize: 28,
              fontWeight: "600",
            }}
          >
            Lets log you in.
          </Typography>
          <Block justifyContent="center" alignItems="center" gap={12}>
            <Button social>Login with Facebook</Button>

            <Button social>Login with Google</Button>

            <Button social>Login with Apple</Button>
          </Block>
          <Typography>or</Typography>

          <Button color="white" social bg={"#0A77FF"}>
            Sign in with password
          </Button>
        </Block>

        <Block>
          <Typography p>
            By using our services you are agreeing to our{" "}
            <Typography link>Terms</Typography> and{" "}
            <Typography link>Privacy</Typography>{" "}
          </Typography>
        </Block>
      </Block>
    </Block>
  );
}
