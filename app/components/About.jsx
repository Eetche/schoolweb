import css from "../css/about.module.css"

import Image from "next/image"

import welcomeImg from "../media/welcome.jpg"


export default function About() {
    return (
        <div className={css.about}>
            <div className={css.welcomeImgContainer}>

                <Image  className={css.welcomeImg} src={welcomeImg} alt="welcome.jpg" layout="responsive"></Image>
            </div>
            <div className={css.sloganContainer}>
                <h2 className={css.slogan}>Образование превращает ваше плохое сегодня в <a href="/">хорошее завтра.</a></h2>
            </div>
        </div>
    )
}