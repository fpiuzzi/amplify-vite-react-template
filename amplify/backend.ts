// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { defineAuth } from '@aws-amplify/backend';

export const backend = defineBackend({

  auth: defineAuth({
    loginWith: {
      email: true,

    }
  }),
});


import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
      .model({
        content: a.string(),
      })
      .authorization((allow) => [
        allow.owner()
      ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});