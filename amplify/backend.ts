// amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { defineAuth } from '@aws-amplify/backend';
import { data } from './data/resource';

export const backend = defineBackend({
    auth: defineAuth({
        loginWith: {
            email: true
        }
    }),
    data
});