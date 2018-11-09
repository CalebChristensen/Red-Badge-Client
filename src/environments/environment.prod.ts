export const environment = {
  production: true,
  APIKEY: '3XARRaE3NR4VdZpUIAgwO3wJ7I1mnDyp1WQK6CSO'
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'no-borders-client.herokuapp.com':
    APIURL = `https://red-badge-server.herokuapp.com`
    break
  default: 
    APIURL = `http://localhost:3000`
}
