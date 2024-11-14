import { useParams } from "react-router-dom"

export default function Model (){
    const {make} = useParams()
    return (<h1>Please enter model from {make}</h1>)
}