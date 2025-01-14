import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../UsersSeach/Preloader'

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.backImage}>
                <img src='http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
            </div>
            <span className={s.profile}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} />
                </div>
                <div className={s.contact}>
                    <p>Facebook: {props.profile.contacts.facebook}</p>
                    <p>Website: {props.profile.contacts.website}</p>
                    <p>vk: {props.profile.contacts.vk}</p>
                    <p>Twitter: {props.profile.contacts.twitter}</p>
                    <p>Instagram: {props.profile.contacts.instagram}</p>
                    <p>Youtube: {props.profile.contacts.youtube}</p>
                    <p>github: {props.profile.contacts.github}</p>
                    <p>mainLink: {props.profile.contacts.mainLink}</p>
                </div>
                <div className={s.information}>
                    <p>Имя: {props.profile.fullName}</p>
                    <p>Статус: {props.profile.lookingForAJobDescription}</p>
                    {props.profile.lookingForAJob?<p>Ищу работу</p>:
                    <p>Работаю</p>}
                </div>
            </span>
        </div>)
}

export default Profileinfo