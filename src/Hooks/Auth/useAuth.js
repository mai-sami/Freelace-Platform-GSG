import axios from "axios"

const useAuth = () => {
    const LoginAction = async (data) => {
        try {
            const res = await axios.post('', { data })
            console.log(res, "res")
        }
        catch (e) {
            console.log(e.message, "e.message")
        }
        finally {
        }

    }
    return { LoginAction }
}

export default useAuth