import css from "../css/welcome.module.css"
import Image from "next/image"

import logo from "../media/logo.png"

export default function Welcome() {
    return (
        <div className={css.welcome}>
            <Image src={logo} alt="logo.png"></Image>
            <h1>
                <span className={css.offsite}>оффициальный сайт</span>
                <br />
                <span>
                Муниципального бюджетного
                общеобразовательного учреждения
                </span>
                <br />
                «Средняя общеобразовательная школа №55 города Челябинска»
            </h1>
        </div>
    )
}