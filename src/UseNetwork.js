import { useEffect, useState } from "react"

function useNetwork(){
    const [state, setState] = useState({
        since: undefined,
        online: navigator.onLine,
    })


    useEffect(() => {

        const handleOnline = () => {
            setState(prev => ({
                ...prev,
                online: true,
                since: new Date().toString()
            }))
        }
        const handleOffline = () => {
            setState(prev => ({
                ...prev,
                online: false,
                since: new Date().toString()
            }))
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('online', handleOffline)
        }
    }, [])
    return state
}

export default useNetwork