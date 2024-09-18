import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FAQ_main_wrapper, Map_side, Q_vs_A_wrapper_main, QvsA_wrapper_login, Second_wrapper, Third_text, Third_wrapper, Top_text_info } from './tabsStyle';
import down from "../../assets/down_icon_more_larger.svg";
import car_image from '../../assets/tab_image.png';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Compares_butt_container, MainWrapper_acardion, The_best_main, Wrapper_of_buttons } from '../acardion/styleAcardion';
import { Typography } from '@mui/material';
import map from '../../assets/map_second.png';
import { EmailComponent } from '../mail';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',disley: 'flex',  background:'rgba(0, 109, 171, 0.20)',color:'black',paddingLeft:'97px'
 }}>
        <Tabs className='tabs_wrapper' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item reviews" {...a11yProps(0)} sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }} />
          <Tab label="Q&A" {...a11yProps(1)} 
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#006DAB",
              color: "white",
            },
            color: "#373737",
            fontWeight: "600",
            textTransform: "capitalize",
          }} />
          <Tab label="FAQ" {...a11yProps(2)} sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }}/>
          <Tab label="Contact" {...a11yProps(3)} sx={{
                "&.Mui-selected": {
                  backgroundColor: "#006DAB",
                  color: "white",
                },
                color: "#373737",
                fontWeight: "600",
                textTransform: "capitalize",
              }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
     
     <Top_text_info>

        <div className='Premium_vs_best_wrapper'>
            <div className='premium_wrap'>
                <p className='premium_style'>Premium Review 35</p>
            </div>
            <div className='best_wrap'>  <div className='best_right'><img src={down} alt='down_icon'/></div></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>

        <div className='car_info_boxes_wrapper'>
           <div className='box'>
                 <div className='left_side_image'>
                   <img className='image_ins' src={car_image} alt='car_image'/>
                 
                 <div className='middle_side_text_wrap'>
                     <p className='text_style_one'>Car name</p>
                     <p className='text_style_two'>brand</p>
                     <p className='text_style_three'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                 </div>
                 
                 </div>

                 <div className='right_side_info_box'>
                    <p>ID: 254</p>
                    <p>Date: 22.02.2022</p>
                    <p>Viewed: 135</p>
                 </div>
           </div>
           <div className='line_under'></div>
        </div>
     </Top_text_info>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>  

  
 <Q_vs_A_wrapper_main>

 <div className='Third_text'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <div className='wrapper_main_texts'>
             <p>Name</p>
             <p>Question Lorem ipsum dolor sit amet ?</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className='wrapper_main_texts'>
             <p>Name</p>
             <p>Question Lorem ipsum dolor sit amet ?</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <div className='wrapper_main_texts'>
             <p>Name</p>
             <p>Question Lorem ipsum dolor sit amet ?</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className='wrapper_main_texts'>
             <p>Name</p>
             <p>Question Lorem ipsum dolor sit amet ?</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
           <div className='wrapper_main_texts'>
             <p>Name</p>
             <p>Question Lorem ipsum dolor sit amet ?</p>
         </div>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      
      </Accordion>
 </div>


<EmailComponent />

</Q_vs_A_wrapper_main> 


      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>

<FAQ_main_wrapper>

  <div className='first_side_in'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Frequently asked questions </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  </div>

<EmailComponent />


</FAQ_main_wrapper>
    

      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>

 <Map_side>
   
 <div className='left_side_image'>
      <div className='imaage_wrap_jh'>
           <img className='imaage_wrap_style' src={map} alt='map'/>
      </div>
      <div className='two_box_wrap'>
          <div className='phone_num'></div>
          <div className='email'></div>
      </div>
 </div>
  
 <EmailComponent />


 </Map_side>

      </CustomTabPanel>
      
    </Box>
  );
}
