import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: 'http://id.finconic.com',
    realm: 'finconic realm',
    clientId: 'Demo-1',
});

export default keycloak;