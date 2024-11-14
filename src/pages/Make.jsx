import { useParams } from "react-router-dom"

export default function Make (){
    const {name} = useParams()
    return (<h1>Welcome {name}!</h1>)
}