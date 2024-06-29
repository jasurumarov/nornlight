import React from 'react'

// Icons
import CompanyIcon1 from '../../assets/icons/company1.svg'
import CompanyIcon2 from '../../assets/icons/company2.svg'
import CompanyIcon3 from '../../assets/icons/company3.svg'
import CompanyIcon4 from '../../assets/icons/company4.svg'

const Companies = () => {
    return (
        <section className='companies-section'>
            <div className="container">
                <div className="companies-section__content">
                    <h2>Только проверенные бренды</h2>
                    <article>
                        <img src={CompanyIcon1} alt="company icon" />
                        <img src={CompanyIcon2} alt="company icon" />
                        <img src={CompanyIcon3} alt="company icon" />
                        <img src={CompanyIcon4} alt="company icon" />
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Companies
