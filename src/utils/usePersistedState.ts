import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<Type> = [
    Type,
    Dispatch<SetStateAction<Type>>
]

function usePersistedState<Type>(key: string, initialState: any): Response<Type> {
    const [ state, setState ] = useState(() => {
        const recordedTheme = localStorage.getItem(key)

        if (recordedTheme) {
            return JSON.parse(recordedTheme)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [ state, setState ]
}

export default usePersistedState