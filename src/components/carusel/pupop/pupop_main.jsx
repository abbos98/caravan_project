import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Video_ConTainer } from './pupopStyle';


const App = () => {
    const [a, b] = useState(null);

    const modals = [
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/ayEvqETlBs8?si=RnONbQGynFs5zdCP&amp;start=3",imageSrc: "https://www.shutterstock.com/image-photo/couple-sitting-camping-chair-nature-600nw-2298440117.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/RQL0Ld7E6DA?si=rEaqrMz64xPl0Pre&amp;start=3",imageSrc: "https://weinsberg.com/fileadmin/media/mj2021-2022/wohnwagen/global/uebersicht/kta-weinsberg-2021-2022-wohnwagen-uebersicht-caraone-teaser.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/6RsuVUB44rU?si=0O0o7UJJLxpGDLah&amp;start=3",imageSrc: "https://www.gccaravans.co.za/wp-content/uploads/2020/11/Sprite-Space-Caravan.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/9NpSU-j6eV8?si=Mg0C1rAKW5NZYvTd&amp;start=3",imageSrc: "https://d38b8me95wjkbc.cloudfront.net/uploads/blog_image/image/18138/1._Motorhomes_are_slightly_smaller_but_easier_to_drive.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/9-EfH6MTPW8?si=CChmvtQSYrQQ0vLU&amp;start=3",imageSrc: "https://www.caravanhire-online.co.uk/wp-content/uploads/2020/04/home-mobile.jpg" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/gYn6_ls662Q?si=vrYRaVo7sk_10hRv&amp;start=3",imageSrc: "https://content.ezytrail.com.au/uploads/01_Hero_Image_min_46cb1829c4.png" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/Kq8mtJKizCo?si=4qg210vuSxB6LxZT&amp;start=3",imageSrc: "https://outbackhq.com.au/wp-content/uploads/2022/11/CUB_C16_HR2-7542-copy.webp" },
        { title:"YouTube video player", videoSrc: "https://www.youtube.com/embed/2lDqDSPhozU?si=SAge5UQg2FuTH37K&amp;start=3",imageSrc: "https://cf-images.ap-southeast-2.prod.boltdns.net/v1/static/963482464001/6eb5694b-5056-4ba5-ae23-00437b3bf681/8c37b197-ce11-4d1b-b8fb-414cbdda9a50/1920x1080/match/image.jpg" }
    ];
    return (
      <>
      <Video_ConTainer>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>

            {modals.map((velue, index) => (
                <img
                    key={index} src={velue.imageSrc} alt={`rasm ${index + 1}`} onClick={() => b(index)} //index  rasmni bosilishi onClick={() => b(index) funcsiada
                    style={{
                        cursor: 'pointer',
                        margin: '10px',
                        width: '292px',
                        height: '292px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.30)',
                    }}
                />
            ))}

            {modals.map((velue, index) => (
                <Modal key={index} open={a === index} onClose={b}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border:"none",
                        width:"100vw",
                        maxWidth: "850px",
                        height:"480px",
                        borderRadius:"20px",
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        p: 4,
                    }}>
                        <Typography variant="h6" style={{
                          display:"flex",
                          justifyContent:"space-between",
                        }}>{velue.title} 
                        <h4 onClick={b}>
                            x
                        </h4>
                        </Typography>


                        <Box sx={{ mt: 2.5, position: 'relative', paddingBottom: '0%', height: 0,border: "none" }}>
                            <iframe
                                src={velue.videoSrc}
                                title={velue.title}
                                frameBorder="0"
                                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    borderRadius:"20px",
                                    width:"100%",
                                    maxWidth: '790px',
                                    height: '360px',
                                }}
                            />
                        </Box>

                    </Box>
                </Modal>
            ))}
        </div>
        </Video_ConTainer></>
    );
};

export default App;
