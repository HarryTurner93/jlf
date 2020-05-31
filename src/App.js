import React from 'react';
import styles from './appStyles.module.css';
import './App.css';
import Iframe from 'react-iframe'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Logo from './jlf_logo.png';

function App() {
    return (
        <div className="App">
            <div className={styles.page}>
                <div className={styles.jumbotron}>
                    <div className={styles.hello}>
                        <h1>Hi there.</h1>
                        <h1>Welcome to the Holding Page for The Julius Little Foundation website.</h1>
                        <p>
                            We are a newly registered charity, our goal is to support young people in distress
                            throughout Buckinghamshire by providing them with free counselling services.
                        </p>
                        <p>
                            Our services will be aimed at 11-19 year olds, who can self-refer through their
                            doctors, school or our website.
                        </p>
                    </div>
                    <div className={styles.logo}>
                        <img className={styles.image} src={Logo} alt='Logo'/>
                    </div>
                </div>
                <div className={styles.box_panel}>
                    <div className={styles.box}>
                        <h1 className={styles.box_title}>Our Story</h1>
                        <p className={styles.box_text}>
                            This charity was set up following the death of Julius Little in June 2019. Julius was a
                            caring and compassionate young man who struggled with depression and anxiety.
                        </p>
                        <p className={styles.box_text}>
                            The Julius Little Foundation was created to help others like him.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.box_title}>Our Mission</h1>
                        <p className={styles.box_text}>
                            I in 4 of us gets a mental health problem, and currently there are not enough resources.
                        </p>
                        <p className={styles.box_text}>
                            We are here to help by providing a free, confidential, safe space for you to explore and
                            discuss anything troubling you.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.box_title}>Our Progress</h1>
                        <p className={styles.box_text}>
                            Since our set-up, we have raised over £X.
                        </p>
                        <p className={styles.box_text}>
                            We are now in the process of setting up these counselling services.
                        </p>
                    </div>
                </div>
                <div className={styles.donate_outer}>
                    <div className={styles.donate_inner}>
                        <div className={styles.message}>
                            <h1>How to help or donate</h1>
                            <p>
                                We depend on donations and are very grateful to all who give to us. By following us, donating and
                                fundraising, you can help us make a change by helping our most vulnerable.
                            </p>
                        </div>
                        <div className={styles.two_panel}>
                            <div className={styles.contact}>
                                <p>Please find us on:</p>
                                <div className={styles.icon_link}>
                                    <InstagramIcon style={{paddingRight: '20px', 'font-size': '48px'}}/>
                                    <p><a href="https://www.instagram.com/thejuliuslittlefoundation/?hl=en">@thejuliuslittlefoundation</a></p>
                                </div>
                                <div className={styles.icon_link}>
                                    <FacebookIcon color="primary" style={{paddingRight: '20px', 'font-size': '48px'}}/>
                                    <p><a href="https://www.facebook.com/thejuliuslittlefoundation">The Julius Little Foundation</a></p>
                                </div>
                                <div className={styles.icon_link}>
                                    <MailOutlineIcon style={{paddingRight: '20px', 'font-size': '48px'}}/>
                                    <p>thejuliuslittlefoundation@hotmail.com</p>
                                </div>
                                <p>Registered charity Number 1186526.</p>
                            </div>
                            <div className={styles.donate}>
                                <p>Please use the following PayPal link to provide donations.</p>
                                <h3><a href="https://www.paypal.me/JuliusLFoundation">Donate to the Julius Little Foundation</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//<Iframe url="https://www.youtube.com/embed/xDMP3i36naA"
//                                         width="100%"
//                                         height="350px"
//                                         display="initial"
//                                         position="relative"
//                                 />

export default App;
