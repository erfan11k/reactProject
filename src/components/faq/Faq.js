import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import {questions} from './data'

const Faq = () => {
  return (
  <section id='faq'>
    <div className='faq-contanier'>
      <div className='faq-title'>
        <MdOutlineLibraryBooks color='orangered' size={30}/>
        <h2>سوالات متداول</h2>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیکی است</p>
      </div>

      <div className='questions'>
        {
          questions && questions.map((question) =>
            <div className='question' key={question.id}>
              <div className='question-title'>
                <h4>{question.title}</h4>
                <button>
                  <AiOutlinePlus/>
                </button>
              </div>
              <div className='question-answer'>
                <p>{question.answer}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  </section>
  )
}

export default Faq