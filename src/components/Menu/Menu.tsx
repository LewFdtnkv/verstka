import './menu.scss'
import '../../styles.scss'
import Button from '../Button/Button'
export default function Menu() {
  return (
    <main>
        <div className="title">
            <div style={{display: 'flex', alignItems: 'end',justifyContent: 'start', gap: 20}}>
            <img src="./public/DownAllow.svg" alt="" className="title_downAllow" />
            <div className="title_date">
                <span>New event</span> coming up / june 7 - 13
            </div>
                
            </div>
            <span className="title_name">
                crossfit
            </span>
        </div>
        <div className="viewMore">
            <div className="viewMore_text">
                <img src="./public/plus.svg" alt="" className="viewMore_anotation-plus" />
                <div className="viewMore_anotation">Be you, just stronger! Power is in you
                    <div className="viewMore_anotation__div">Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.</div>
                    <Button/>
                </div>
            </div>
            <img src="./public/sportsmen.png" alt="" className="viewMore_img"/>
        </div>
        <div className="elementor-container">
            <img src="./public/sportsmen2.png" alt="" className="elementor-container_img"/>
            <div className="elementor-container_text">
                <img src="./public/plus.svg" alt="" className="elementor-container-plus" />
                <div className="elementor-container_anotation">Today is the best day to start!
                    <div className="elementor-container_anotation__div">Sed abhorreant constituam consectetuer eu. At mei clita deserunt, his movet molestie nemore.</div>
                    <Button/>
                </div> 
            </div>
        </div>
        <div className="qodef-grid-inner">
            <ul className="qodef-grid-inner_ul">
                <li className="qodef-grid-inner_ul__li"><img src="./public/1.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
                <li className="qodef-grid-inner_ul__li"><img src="./public/2.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
                <li className="qodef-grid-inner_ul__li"><img src="./public/3.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
                <li className="qodef-grid-inner_ul__li"><img src="./public/4.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
                <li className="qodef-grid-inner_ul__li"><img src="./public/5.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
                <li className="qodef-grid-inner_ul__li"><img src="./public/6.svg" alt="" className="qodef-grid-inner_ul__li___img"/></li>
            </ul>
        </div >
        <div className="elementor-section"><img src="./public/section.elementor-section.png" alt="" style={{width: '100%'}}/>
            <div className="elementor-section_text">JOIN US <img src="./public/upArrow.svg" alt="" className="elementor-section_text__img"/></div>
        </div>
        <div style={{ backgroundColor: '#131619' }}>
            <div className="elementor-widget-wrap">
                <div className="elementor-widget-wrap_title">
                Start here 
                </div>
                <div className="elementor-widget-wrap_text">fill the form below to start your journey</div>
                <div className="elementor-widget-wrap_inputs">
                    <input type="text" className="elementor-widget-wrap_inputs-input"placeholder="Name" />
                    <input type="text" className="elementor-widget-wrap_inputs-input" placeholder="Email" />
                    <Button/>
                </div>
            
            </div>
        </div>
        <section className="elementor-section">
            <img src="./public/map.png" alt="" className="elementor-section_img"/>
            <div className="elementor-section_info">
                <div className="elementor-section_info__title">
                    <img src="./public/plus.svg" alt="" className="viewMore_anotation-plus" />
                    Find us near you
                </div>
                <div className="elementor-section_info__text">
                    Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci
                </div>
                <Button/>
            </div>
        </section>
        <div className="part-container">
            <div className="part-container_title">
                <img src="./public/plus.svg" alt="" className="part-container_title-plus"/>
                be a part of our fit family
            </div>
            <div className="part-container_text">Training helps you think and feel better. join us!</div>
            <img src="./public/people.png" alt="" style={{width: "100%", height: '100%'}}/>
        </div>
        <div className="qodef-shortcode">
            <div className="qodef-m-calculator-holder-inner">
                <div className="qodef-m-calculator-holder-inner_title">
                    {/* <img src="./public/plus.svg" alt="" /> */}
                    Input your BMI
                </div>
                <div className="qodef-m-calculator-holder-inner_text">
                    Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei
                </div>
                <ul className="qodef-m-calculator-holder-inner_inputs">
                    <li className="qodef-m-calculator-holder-inner_inputs-input">
                        <input type="text" placeholder="Height / cm" className="qodef-m-calculator-holder-inner_inputs-input-in1"/>
                        <input type="text" placeholder="Weight / kg" className="qodef-m-calculator-holder-inner_inputs-input-in1"/>
                    </li>
                    <li className="qodef-m-calculator-holder-inner_inputs-input">
                        <input type="text" placeholder="Age" className="qodef-m-calculator-holder-inner_inputs-input-in1"/>
                        <input type="text" placeholder="Gender" className="qodef-m-calculator-holder-inner_inputs-input-in1"/>
                    </li>
                    <li className="qodef-m-calculator-holder-inner_inputs-input">
                        <input type="text" placeholder="Select an activity factor:"className="qodef-m-calculator-holder-inner_inputs-input-in2"/>
                    </li>
                </ul>
                <div className="qodef-m-calculator-holder-inner_button">
                    calculate <img src="./public/span.qodef-m-arrow.svg" alt="" className="qodef-m-calculator-holder-inner_button-img"/>
                </div>
            </div>
            <div className="qodef-e-circle">
            <table className="qodef-e-circle_bmi-table">
                <thead>
                    <tr>
                    <th>BMI</th>
                    <th>WEIGHT STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                    </tr>
                    <tr>
                    <td>18.5 - 24.9</td>
                    <td>Healthy</td>
                    </tr>
                    <tr>
                    <td>25.0 - 29.9</td>
                    <td>Overweight</td>
                    </tr>
                    <tr>
                    <td>30.0 - and Above</td>
                    
                    <td>Obese</td>
                    </tr>
                    
                </tbody>
                <hr style={{width: '75%', marginLeft: 'auto'}}/>
                </table>
                <div className="qodef-e-circle_annotation"><b>BMR</b>  Metabolic Rate / <b>BMI</b>  Body Mass Index</div>
            </div>
        </div>
    </main>
  )
}
