import React from 'react';
import {
    Box,
    Button,
    Typography,
    Container,
    Fade,
    Grid,
    // Stack
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { Fade } from "react-awesome-reveal";

const aboutContentAreaStyle = { 
    height: 'auto',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    margin: {
        md: '1.85rem 0 .7rem 0',
        xs: '2.1rem 0 .7rem 0'
    },
    padding: '1rem 0 1.3rem',
    backgroundColor: '#232e44', //primary.main not working
    width: '100%',
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            border: 'solid white 3px',
            transition: '.3s'   
        }
}

const aboutContentStyle = {
    display: 'flex',
    flexDirection: {
        md: 'row',
        xs: 'column'
    },
    justifyContent: 'center',
    alignItems: 'center'

}

const aboutBioStyle = {
    width: {
        md: '45%',
        sm: '75%',
        xs: '90%'   
    },
    textAlign: 'center',
    margin: '0 0 1rem'
}

const aboutContentTextStyle = {
    color: 'white',
    padding: '1rem', //padding
    fontSize: '1.2rem',
    textAlign: 'center'
}

//=========================================SKILLS=========

const aboutContentIconStyle = {
    width: '50px',
    '&:hover': {
        animationName: 'zoom',
        animationDuration: '.5s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.08)'}
        }
    }
}

const emailIconStyle = {
    width: '45px',
    '&:hover': {
        animationName: 'zoom',
        animationDuration: '.35s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.10)'}
        }
    }
}

// const aboutContentBackendIconStyle ={
//     width: '35px'
// }

const skillsGridStyle = {
    justifyContent: {
        md: 'center',
        xs: 'space-around',
    },
    gap: {
        md: '1.1rem',
        xs: '2rem',
    },
    margin: '0 auto 1.6rem'
}

const skillsGridItem = {
    width: '100%',
    maxWidth: '100px'
}

const emailSkillsGridStyle = {
    justifyContent: {
        md: 'center',
        xs: 'space-around',
    },
    gap: {
        md: '1.1rem',
        xs: '2rem',
    },
    margin: '1.6rem auto 0',
    padding: '1.6rem 0',
    borderTop: 'solid 1px rgb(220, 220, 220)', 
}

const emailGridItems = {
    width: '100%',
    maxWidth: '150px'
}

//=========================================================

const aboutButtonStyle = {
    position: 'relative',
    width: '100%',
    caretColor: 'transparent',
    color: 'white',
    backgroundColor: 'primary.main',
    fontSize: {
        md: '1.5rem',
        xs: '1.1rem'
    },
    fontFamily: 'sans-serif',
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: 0,
    padding: '1.6rem',
    marginTop: {
        md: '1rem',
        xs: '1.5rem'
    },
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            backgroundColor: 'primary.main',
            border: 'solid white 3px',
            transition: '.3s'   
        }
}

const aboutImageStyle = {
    position: 'relative',
    height: 'auto',
    width: {
        md: '300px',
        xs: '200px'
    },
    borderRadius: '50%',
    margin: {
        md: '2rem 0',
        xs: '2rem 0 1.2rem'
    },    
    caretColor: 'transparent',
    boxShadow: 'rgb(173, 173, 173) 1px 1px 7px',
}

const aboutTextStyle = {
    fontSize: {
        md: '1.3rem',
        xs: '1.05rem'
    }
}

const closeButtonAreaStyle = {
    textAlign: 'center',
    position: 'relative',
    top: '5%',
    display: 'block',
    margin: 'auto',
}

const closeButtonStyle ={
    transform: 'rotate(90deg)',
    height: '2.4rem',
    width: '2.4rem',
    caretColor: 'transparent',
    color: 'white',
        '&:hover': {
            color: 'rgb(250, 12, 12)',
            borderWidth: '0 5px 5px 0'
        }
}

const About = ({showAboutButton, setAboutButton, showAboutContent, setAboutContent}) => {

    const AboutButton = () => {
        return (
            <Button
                sx={aboutButtonStyle}
                onClick={()=>{
                    setAboutButton(false);
                    setAboutContent(true);
                }}
            >
                About Me
            </Button>
        )
    }
    
    const AboutContent = () => {
        return (
            <Fade in={showAboutContent} timeout={650}>
                <Box sx={aboutContentAreaStyle}>
                    <Box>
                        <Button  sx={closeButtonAreaStyle}
                            onClick={()=>{
                                setAboutButton(true);
                                setAboutContent(false);
                            }}
                        >
                            <ArrowBackIosNewIcon sx={closeButtonStyle} />
                        </Button>
                    </Box>
                
                    <Box sx={aboutContentStyle}>
                        <Box sx={aboutBioStyle}>
                            <Box 
                                component="img"
                                src={process.env.PUBLIC_URL + 'profile-picture.jpg'}
                                alt="About Me Image"
                                sx={aboutImageStyle}    
                            /><br />
                            <Typography sx={aboutContentTextStyle}>
                                I am a Self-Taught Developer that likes to build functional, responsive Web Sites, Apps and Emails.
                                Always looking forward to a new challenge. Professional and reliable.
                            </Typography>
                        </Box>
                        <Box sx={aboutContentTextStyle}>
                            <Typography sx={{fontSize: '1.5rem', fontWeight: '600'}}>SKILLS</Typography><br/>

                            {/* <Fade cascade 
                                damping={0}
                                triggerOnce
                            > */}
                                <Grid container sx={skillsGridStyle} xs={8} md={12}>
                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/html-5.png'} 
                                            alt="HTML"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>HTML</Typography>
                                    </Grid>
                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/css-3.png'} 
                                            alt="CSS"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>CSS</Typography>
                                    </Grid>
                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/js.png'} 
                                            alt="JavaScript"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>JavaScript</Typography>
                                    </Grid>
                                    {/* <Grid item>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/jquery.png'} 
                                            alt="jQuery"
                                            sx={aboutContentIconStyle} 
                                        /><br/>jQuery
                                    </Grid> */}
                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/react.png'} 
                                            alt="React.js"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>React</Typography>
                                    </Grid>
                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/php.png'} 
                                            alt="PHP"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>PHP</Typography>
                                    </Grid>

                                    <Grid item sx={skillsGridItem}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/mysql.png'} 
                                            alt="MySQL"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>MySQL</Typography>
                                    </Grid>
                                    
                                    {/* <Grid item>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/laravel.png'} 
                                            alt="Laravel"
                                            sx={aboutContentIconStyle} 
                                        /><br/>Laravel
                                    </Grid> */}

                                    <Grid item>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/skills/wordpress.png'} 
                                            alt="WordPress"
                                            sx={aboutContentIconStyle} 
                                        /><br/><Typography sx={aboutTextStyle}>WordPress</Typography>
                                    </Grid>
                                </Grid>
                            {/* </Fade> */}

                            <Grid container xs={8} md={12} sx={emailSkillsGridStyle}>
                                <Grid item sx={emailGridItems}>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/email.png'} 
                                        alt="html emails"
                                        sx={emailIconStyle} 
                                    /><br/><Typography sx={aboutTextStyle}>HTML Email Development</Typography>
                                </Grid>
                                <Grid item sx={emailGridItems}>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/g-analytics.png'} 
                                        alt="google analytics"
                                        sx={emailIconStyle} 
                                    /><br/><Typography sx={aboutTextStyle}>Google Analytics</Typography>
                                </Grid>
                                <Grid item sx={emailGridItems}>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/figma.png'} 
                                        alt="figma"
                                        sx={emailIconStyle} 
                                    /><br/><Typography sx={aboutTextStyle}>Figma</Typography>
                                </Grid>
                                <Grid item sx={emailGridItems}>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/mailchimp.png'} 
                                        alt="mailchimp"
                                        sx={emailIconStyle} 
                                    /><br/><Typography sx={aboutTextStyle}>Mailchimp</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    
                </Box>
            </Fade>
        )
    }

    return (

        <Container maxWidth={false}>
                <Box id="about">
                    {showAboutButton ? <AboutButton /> : null}
                    {showAboutContent ? <AboutContent /> : null}
                </Box>
        </Container>
    );
};

export default About;