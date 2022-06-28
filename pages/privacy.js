import React from 'react'
import FooterSite from '../components/FooterSite';
import ContactForm from '../components/ContactForm'
import { Helmet } from "react-helmet";
import HeaderSite from '../components/HeaderSite';

function privacy() {
    return (
        <div>
            <HeaderSite />
            <div className="flex flex-col items-center py-12 px-3 mt-16" style={{ fontFamily: 'Montserrat' }}>
                <div className='w-10/12 md:w-2/3 flex flex-col items-center'>
                    <h1 className='p-4 pt-6 text-4xl border-b-2 border-black w-full'>Privacy Policy</h1>
                    <div className='w-10/12 mt-5'>
                        <p className="p-width">
                            Privacy Policy
                            <br/><br/>
                            Your privacy is important to us. It is The Glimpse Group, Inc. and its subsidiary companies (together and separately “The Glimpse Group”’) policy to respect your privacy regarding any information we may collect from you across our website, http://TheGlimpseGroup.com, and all other sites we own and operate.
                            <br/><br/>
                            We only ask for personal information when we need it to provide a service to you. If we collect information, we do so by fair and lawful means, with your knowledge and consent.
                            <br/><br/>
                            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                            <br/><br/>
                            We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                            <br/><br/>
                            Our websites may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. We strongly advise you to review the Privacy Policy of every site you visit.
                            <br/><br/>
                            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                            <br/><br/>
                            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                            <br/><br/>
                            This policy is effective as of 26 August 2019.
                        </p>
                        <p className="p-width">
                            <br/><br/>
                            Information Collection and Use
                            <br/><br/>
                            We may collect several different types of information for various purposes to provide and improve our Service to you.
                            <br/><br/>
                            Personal Data
                            <br/><br/>
                            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:
                            <br/><br/>
                            <ul className='mx-10'>
                                <li>Email address</li>
                                <li>First name and last name</li>
                                <li>Cookies and Usage Data</li>
                            </ul>
                        </p>
                        <br/><br/>
                        <p className="p-width">
                            Usage Data
                            <br/><br/>
                            We may also collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                            <br/><br/>
                            Cookies Data
                            <br/><br/>
                            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
                            <br/><br/>
                            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
                            <br/><br/>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                            <br/><br/>
                            Examples of Cookies we use:
                        </p>
                        <p className="p-width">The Glimpse Group uses the collected data for various purposes:</p>
                        <br/><br/>
                        <ul className="p-width mx-10">
                            <li>To provide and maintain the Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                            <li>To provide customer care and support</li>
                            <li>To provide analysis or valuable information so that we can improve the Service</li>
                            <li>To monitor the usage of the Service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                        <br/><br/>
                        <p className="p-width">
                        Transfer Of Data
                        <br/><br/>
                        Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                        <br/><br/>
                        If you are located outside of the United States and choose to provide information to us, please note that we may transfer the data, including Personal Data, to United States and process it there.
                        <br/><br/>
                        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                        <br/><br/>
                        The Glimpse Group will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                        <br/><br/>
                        Disclosure Of Data
                        <br/><br/>
                        Legal Requirements
                        <br/><br/>
                        The Glimpse Group may disclose your Personal Data in the good faith belief that such action is necessary to:
                        </p>
                        <br/><br/>
                        <ul className="p-width mx-10">
                            <li>To comply with a legal obligation</li>
                            <li>To protect and defend the rights or property of The Glimpse Group</li>
                            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                            <li>To protect the personal safety of users of the Service or the public</li>
                            <li>To protect against legal liability</li>
                        </ul>
                        <br/><br/>
                        <p className="p-width">
                        If you are a European citizen, under GDPR, you have certain individual rights. You can learn more about these guides in the [GDPR Guide].
                        <br/><br/>
                        Security of Data
                        <br/><br/>
                        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        <br/><br/>
                        Service Providers
                        <br/><br/>
                        We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                        <br/><br/>
                        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        <br/><br/>
                        Analytics
                        <br/><br/>
                        We may use third-party Service Providers to monitor and analyze the use of our Service. We may utilize Google Analytics for web analytics. You may read their Privacy Policy  at https://policies.google.com/privacy
                        <br/><br/>
                        Children’s Privacy
                        <br/><br/>
                        Our Services do not address anyone under the age of 18 (“Children”).
                        <br/><br/>
                        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                        <br/><br/>
                        Changes to This Privacy Policy
                        <br/><br/>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        <br/><br/>
                        ​Contact
                        <br/><br/>
                        If you have any questions about this Privacy Policy, please contact us at info@glimpsegrp.com.
                        </p>
                    </div>
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default privacy
