export type typeSignUp = {
  email: string;
  password: string;
  image: string;
  btc?: string;
};

export type typeSignIn = Pick<typeSignUp, "email" | "password">;

export type typeSignInWithId = {
    email: string,
    userId: number,
    token: string
}