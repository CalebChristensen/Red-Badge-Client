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
<<<<<<< HEAD
    APIURL = 'https://red-badge-server.herokuapp.com'
=======
    APIURL = `https://red-badge-server.herokuapp.com`
>>>>>>> 12e63f464451d810c762ce102614f48677a35d7e
}
