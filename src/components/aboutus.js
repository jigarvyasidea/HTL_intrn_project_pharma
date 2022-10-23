import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {Alert} from 'react-bootstrap';

class Aboutus extends Component{
    render(){
        return(
            <div className="div2" id="aboutus">
                <Alert >
                <Alert.Heading className="d-flex justify-content-center headingcss" >ABOUT US</Alert.Heading>
                <p className="d-flex justify-content-end ">
                The company is committed to improve the lives of the peoples across the globe by continuously seeking advancements in Modern and Innovative Healthcare.
                Company’s business focuses on providing the comprehensive and strategic marketing and exports of pharmaceutical products to its clients across the globe. 
                Portfolio includes a wide range of allopathic finished formulations in Oral (Solids & Liquids), Topical (Creams, ointments & Lotions) & Parental 
                (Dry Powder & Liquid) adhering to the International Standards of Quality. Other than allopathic segment, Yesha portfolio also includes Bio-Therapeutic 
                Products, Natural Products, Food Supplements of International Standards and the Medical Device from Europe and India (USFDA / EU Accredited).

                As a new Company, Yesha Pharmaceutical aspires to Revolutionize the Global Pharmaceutical & Healthcare Industry by offering the Innovative Products,
                World Class Services, Incomparable Product alternatives and continuous growth in Business and Providing Career opportunities to population. We have a 
                variety of pharmaceutical formulations, food supplements, natural products and medical devices in the field of Rheumatology, Anti-Infective, Nephrology, 
                Gynecology, Cardiology, Diabetology, Anti-Malarial and Psychotropic care.
                </p>
                <hr />
                <p className="mb-0 d-flex justify-content-center">
                        WE BELIEVE THAT IF WE TAKE CARE OF THE PRESENT, WE INSPIRE A BETTER FUTURE.
                </p>
                </Alert>
            </div>
        );
    }
}

export default Aboutus;