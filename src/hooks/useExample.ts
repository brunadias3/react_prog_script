import { useContext } from 'react'
import { Contexto } from '../contexts'

export default function useExample() {
    const context = useContext(Contexto);
    return context
}
