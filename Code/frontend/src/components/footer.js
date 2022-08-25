import footerSvg from "../img/homepage/Asset 9-20.jpg"

function Footer(){
    const date = new Date()
    return(
        <footer>
            <p className="py-5 text-black text-center">All the rights are reserved by BeFit © {date.getFullYear()}</p>
        </footer>
    )
}
export default Footer