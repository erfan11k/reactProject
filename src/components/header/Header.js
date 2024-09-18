import React from 'react'
import phoneheader from '../../assets/phone-header-bg.png'
import './header.css';
import { BsMouse } from 'react-icons/bs';

const Header = () => {
  return (
    <section id='header'>
      <div className='header-container'>
        <div className='header-right'>
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفورم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>لورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیکی است</p>
          <div className='header-btn'>
            <a href='' className='btn btn-dark'>بیاین شروع کنیم</a>
            <a href='' className='btn btn-light'>چجوری کار میکنیم</a>
          </div>
        </div>
        <div className='header-left'>
          <img src={phoneheader} alt=''/>
        </div>
      </div>
      <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color={"#fff"} size={25} className='mouse'/>
        </a>
      </div>
    </section>
  )
}

export default Header