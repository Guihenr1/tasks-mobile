import { Alert } from 'react-native'

const server = 'http://guilhermepomp-001-site1.htempurl.com'

function showError(err) {
    Alert.alert('Ops!', 'Não foi possível realizar o login!')
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }