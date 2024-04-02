export default function ButtonMenu({
    text = "Valor padrão",
    colorMenu = 1,
    indexMenu = 1,
    changeMenu = () => {},
    logoutButton = false
}){
    return <div onClick={()=>{changeMenu(indexMenu)}}
                className={ `noSelectButton ${colorMenu===indexMenu ? "selectButton":""} ${logoutButton ? "exitButton":""}`}>{text}</div>
}

