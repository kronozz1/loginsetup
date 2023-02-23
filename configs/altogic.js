import { createClient } from 'altogic';

// This `envUrl` and `clientKey` is sample you need to create your own.
let envUrl = 'https://dy9h-az3a.c4-na.altogic.com';
let clientKey = '8997cf2269f54e3685bf91afb8933cb5';

const altogic = createClient(envUrl, clientKey, {
    signInRedirect: '/login',
});

// We will use this function in server-side.
export const altogicWithToken = token => {
    altogic.auth.setSession({ token });
    return altogic;
};

export default altogic;

