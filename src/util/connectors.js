//import { Connect } from 'uport-connect'

//export let uport = new Connect('TruffleBox')
import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('React Reduc Uport test app', {
    clientId: '2ogHe1ymtUzFm6BEeDGJmtxpgPnpDGutfvi',
    network: 'rinkeby',
    signer: SimpleSigner('a47aab6fbd29047f91970983114119d08975bcac71f4ea409b5cf107e9ab34e8')
})
export const web3 = uport.getWeb3()
