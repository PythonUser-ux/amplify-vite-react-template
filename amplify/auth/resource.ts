import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: true,
  },
  userAttributes: {
    phoneNumber: {
        required: false,
        mutable: true,
    },
    email: {
        required: true,
        mutable: true,
    },
    }
});
