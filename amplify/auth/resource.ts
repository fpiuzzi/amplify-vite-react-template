import { signIn } from 'aws-amplify/auth'

await signIn({
  username: "florent.piuzzi@free.fr",
  password: "Test1234*",
})