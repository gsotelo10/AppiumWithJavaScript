//import expect from 'expect'
import LoginScreen from '../screenObjects/LoginScreen'

describe('My Login application', () => {
    it('Login with a valid Credentials', async () => {
        
        await LoginScreen.tapOnLogin()
        await LoginScreen.login()

    })
})

