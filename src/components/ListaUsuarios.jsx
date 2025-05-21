import usuarios from '../data/usuarios'

export default function ListaUsuarios(){
    return(
        <>
        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>{usuario.nome}</li>
            ))}
        </ul>
        </>
    )
}