import React from 'react';
import "./compareAnd.css";
import { Main_compare_components } from './compareStyle';
import image_in from '../../assets/image 4.png';
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';


const CompareComponents = () => {
  return (
    <Main_compare_components>
    <div className='background_fon'>
       <div className='wrapper_of_text_center'>
        <p className='home_motors'>Home / Motors / Compare</p>
        <p className='motors'>Compare our models</p>
       </div>
    </div>

    <div className='compare_models_and_plus_wrapper'>
    <p className='compare_styled'>Compare Models</p>
    <div className='wrapper_plus'>
        <div className='dum'>+</div>
        <p className='add_style'>Add model</p>
    </div>
    </div>

<div className='asosiy_wrapper'>
<div className='car_container_uch'>

  <div className='image_wrapper_inside'>
    <img className='image_style' src={image_in} alt='car_image' />
  </div>
  
  <div className='name_wrapper_in'>
    <p className='car_of_style'>Name of car</p>
  </div>


  <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>

<CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #4</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #5</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #6</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>


<div className='button_wrap'>
  <button className='order_slice'>Order</button>
</div>





</div>

<div className='car_container_uch'>

  <div className='image_wrapper_inside'>
    <img className='image_style' src={image_in} alt='car_image' />
  </div>
  
  <div className='name_wrapper_in'>
    <p className='car_of_style'>Name of car</p>
  </div>


  <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>

<CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #4</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #5</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #6</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>


<div className='button_wrap'>
  <button className='order_slice'>Order</button>
</div>





</div>

<div className='car_container_uch'>

  <div className='image_wrapper_inside'>
    <img className='image_style' src={image_in} alt='car_image' />
  </div>
  
  <div className='name_wrapper_in'>
    <p className='car_of_style'>Name of car</p>
  </div>


  <CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>

<CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #4</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #5</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #6</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>


<div className='button_wrap'>
  <button className='order_slice'>Order</button>
</div>





</div>
</div>




    </Main_compare_components>
  )
}

export default CompareComponents;