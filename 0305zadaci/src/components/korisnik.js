export default function Korisnik({
    name, lastName, years, onNameChanged
}){
    return (
        <div>
            <p>Moje ime je {name} {lastName} i imam {years} godina</p>
            <input type="text" onChange={onNameChanged} value={name}/>
        </div>
    )
}