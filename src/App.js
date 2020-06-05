import React from 'react';
import ReactDOM from 'react-dom';
import styles from './appStyles.module.css';
import './App.css';
import Iframe from 'react-iframe'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import pic from './j_pic.png';


function App() {
    return (
        <div className="App">
            <div className={styles.page}>
                <div className={styles.jumbotron}>
                    <div className={styles.hello}>
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
                    </div>
                </div>
                <div className={styles.box_panel}>
                    <div className={styles.box} style={{backgroundColor: '#fbe5d6'}}>
                        <h1>Our Story</h1>
                        <p>
                            This charity has been set up in the memory of Julius Little; a caring, compassionate and perhaps most importantly to him an artist and fashion icon.
                        </p>
                        <p>
                            Julius himself suffered with anxiety and depression and sadly took his own life in June 2019, aged 20.
                        </p>
                        <p>
                            His family created the foundation in order to help those struggling with mental illness just like Julius did.
                        </p>
                    </div>
                    <div className={styles.box} style={{backgroundColor: '#dae3f3'}}>
                        <h1>Our Mission</h1>
                        <p>
                            The statistics are bleak, I in 4 of us will suffer with a mental health problem this year and there are not currently enough resources available to help each of us.
                        </p>
                        <p>
                            Our young people face more and more challenges to their mental health and not everyone is receiving the support they need.
                        </p>
                        <p>
                            We are here to help by providing young people a free, confidential, safe space to explore and discuss any troubles with trained mental health professionals.
                        </p>
                    </div>
                    <div className={styles.box} style={{backgroundColor: '#e1e6ea'}}>
                        <h1>Our Progress</h1>
                        <p>
                            The support we have received so far has been amazing! We thank everyone who has donated or given up their time fundraising and volunteering!
                        </p>
                        <p>
                            Almost a year has passed since loosing our beloved Julius and we have achieved so much during this difficult time.
                        </p>
                        <p>
                            But we need your help to get fully operational, please get in touch with fundraising ideas or donations via the information below.
                        </p>
                    </div>
                </div>
                <div className={styles.donate_outer}>
                    <div className={styles.donate_inner}>
                        <div className={styles.message}>
                            <h1>How to help or donate</h1>
                            <p className={styles.donate_message}>
                                We depend on donations and are very grateful to all who give to us. By following us, donating and fundraising, you can help us make a change by helping our most vulnerable.
                            </p>
                            <div className={styles.checkout}>
                                <Iframe url="https://juliuslittlefoundation.charitycheckout.co.uk/donate"
                                         width="100%"
                                         height="1000px"
                                         display="initial"
                                         position="relative"
                                        frameBorder="0"
                                 />
                            </div>
                        </div>
                        <div className={styles.two_panel}>
                            <div className={styles.pad}>

                            </div>
                            <div className={styles.contact}>
                                <h1>Please find us on:</h1>
                                <div className={styles.icon_link}>
                                    <InstagramIcon className={styles.social_icon}/>
                                    <p><a href="https://www.instagram.com/thejuliuslittlefoundation/?hl=en">@thejuliuslittlefoundation</a></p>
                                </div>
                                <div className={styles.icon_link}>
                                    <FacebookIcon color="primary" className={styles.social_icon}/>
                                    <p><a href="https://www.facebook.com/thejuliuslittlefoundation">The Julius Little Foundation</a></p>
                                </div>
                                <div className={styles.icon_link}>
                                    <MailOutlineIcon className={styles.social_icon}/>
                                    <p>thejuliuslittlefoundation@hotmail.com</p>
                                </div>
                                <p>Registered charity Number 1186526.</p>
                            </div>
                            <div className={styles.donate}>
                                <img src={pic} className={styles.j_pic}/>
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
