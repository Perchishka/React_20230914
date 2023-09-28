
export const Menu = ({ menu }) => {
    return (
    <ul>
        {menu?.map(menuItem => (
            <li key={menuItem.id}>
                <div>{menuItem.name} - ${menuItem.price}</div>
            </li>
        ))}
    </ul>
    )
}