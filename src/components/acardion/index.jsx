import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Compares_butt_container, MainWrapper_acardion, The_best_main, Wrapper_of_buttons } from './styleAcardion';
import first from "../../assets/first_small.png";
import second from "../../assets/second_small.png";
import third from "../../assets/third_small.png";
import { Link } from 'react-router-dom';

export default function AccordionUsage() {
  return (
    <The_best_main>
      <Accordion  defaultExpanded>
        <AccordionSummary className='cost_style_in'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Cost of car
          <div className='line_under_inter'></div>
        </AccordionSummary>
        <AccordionDetails>
<MainWrapper_acardion>
        <div className='from_vs_to'>
          <div className='from_wrapper'>
            <p className='from_text'>from</p>
            <div className='text_area'></div>
          </div>
          <div className='to_wrapper'>
            <p className='to_text'>to</p>
            <div className='text_area'></div>
          </div>
        </div>
</MainWrapper_acardion>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         Brand
        </AccordionSummary>
        <AccordionDetails>
        <div className='box_left_side'>
  
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Aidal</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Knal</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>escape</label>
        </div>
       </div>

   </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Company
        </AccordionSummary>
        <AccordionDetails>
          <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>escape</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Aidal</label>
        </div>

       </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         License type
        </AccordionSummary>
        <AccordionDetails>
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>1 year</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>2 year</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>1.5year</label>
        </div>
       </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Number of travelers
        </AccordionSummary>
        <AccordionDetails>
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>2</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>3-4</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>5+</label>
        </div>
       </div>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Location
        </AccordionSummary>
        <AccordionDetails>
        
        <div className='wrapper_texts'>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Seoul</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Korea</label>
        </div>

        <div className='text_left_side'>
          <input className='input_in' type='checkbox' />
          <label className='label_text'>Pusan</label>
        </div>
       </div>
        </AccordionDetails>
      </Accordion>

      <Wrapper_of_buttons>
        <div className='cancel_butt'>Cancel</div>
        <div className='search_butt'>Search</div>
   </Wrapper_of_buttons>


  <Compares_butt_container>
       <div className='compare_style'>Compare</div>

       <div className='small_car_container'>
        <img className='car_small_style' src={first} alt='samll_car'/>
        <img className='car_small_style' src={second} alt='samll_car'/>
        <img className='car_small_style' src={third} alt='samll_car'/>
       </div>

       <div className='compare_butt_wrapper'>
          <Link to={'/compare_button'}><button className='comare_style'>Compare</button></Link>
       </div>
  </Compares_butt_container>

    </The_best_main>
  );
}
