//Homepage card image
import HConstruction from "../../assets/images/solutions/design-contruction.png";
import HK12 from "../../assets/images/solutions/k-12.jpg";
import HHigherEd from "../../assets/images/solutions/higher-ed.png";
import HTraining from "../../assets/images/solutions/training.jpg";
import HFinance from "../../assets/images/solutions/finance.jpg";
import HFood from "../../assets/images/solutions/food.jpg";
import HHealth from "../../assets/images/solutions/health.jpg";
import HRetail from "../../assets/images/solutions/retail.png";
import HMarketing from "../../assets/images/solutions/marketing.jpg";

//Homepage card icons
import HConstructionIcon from "../../assets/images/solutions/icons/aec.png";
import HK12Icon from "../../assets/images/solutions/icons/k-12.png";
import HHigherEdIcon from "../../assets/images/solutions/icons/higher-ed.png";
import HTrainingIcon from "../../assets/images/solutions/icons/professional-training.png";
import HFinanceIcon from "../../assets/images/solutions/icons/data.png";
import HFoodIcon from "../../assets/images/solutions/icons/food-hospitality.png";
import HHealthIcon from "../../assets/images/solutions/icons/healthcare.png";
import HRetailIcon from "../../assets/images/solutions/icons/meeting.png";
import HMarketingIcon from "../../assets/images/solutions/icons/marketing.png";

// Featured Clients

import Suffolk from "../../assets/images/clients/suffolk.png";
import KPF from "../../assets/images/clients/kpf.png";
import FXC from "../../assets/images/clients/fxc.png";
import Pella from "../../assets/images/clients/pella.png";

import KLearning from "../../assets/images/solutions/k-12-alt.jpg";
import FordHam from "../../assets/images/clients/fordham.png";
import Temple from "../../assets/images/clients/temple.png";

import HigherEd from "../../assets/images/solutions/higher-ed-alt.png";
import Sacred from "../../assets/images/clients/sacred.png";
import PWC from "../../assets/images/clients/pwc.png";

import Food from "../../assets/images/solutions/food-alt.jpg";
import Panera from "../../assets/images/clients/panera-bread.png";
import Magnolia from "../../assets/images/clients/magnolia.png";
import Dominos from "../../assets/images/clients/dominos.png";
import Swiss from "../../assets/images/clients/swiss.png";

import Events from "../../assets/images/solutions/retail-alt.png";
import Colgate from "../../assets/images/clients/colgate.png";
import Chanel from "../../assets/images/clients/chanel.png";
import Bolle from "../../assets/images/clients/bolle.png";
import American from "../../assets/images/clients/american-eagle.png";

import Finance from "../../assets/images/solutions/finance-alt.jpg";
import Glu from "../../assets/images/clients/glu.png";
import Samsung from "../../assets/images/clients/samsung.png";

import Healthcare from "../../assets/images/solutions/health-alt.jpg";
import Montefiore from "../../assets/images/clients/montefiore.png";
import Mount from "../../assets/images/clients/mount.png";
import Yale from "../../assets/images/clients/yale-newhaven.png";
import BostonSchool from "../../assets/images/clients/bostonschool.png";

import Marketing from "../../assets/images/solutions/marketing.png";
import Anomaly from "../../assets/images/clients/anomaly.png";
import RedFuse from "../../assets/images/clients/redfuse.jpeg";
import WPP from "../../assets/images/clients/wpp.png";
import IPG from "../../assets/images/clients/ipg.png";

import Training from "../../assets/images/solutions/training-alt.jpg";
import Unreal from "../../assets/images/clients/unreal.png";
import Verizon from "../../assets/images/clients/verizon.png";
import { ExternalLink } from "react-external-link";

const allindustries = [
  {
    id: 111,
    btnTitle: "AEC",
    name: "Architecture, Engineering & Construction",
    link: "architecture-engineering-construction",

    // Homepage Cards
    hImage: HConstruction,
    hIcon: HConstructionIcon,
    content:
      "Market homes before construction begins and incorporate buyer design preferences from the ground-up with VR/AR. Homeowners can visualize a home’s interior and exterior, allowing architects and engineers to accommodate their preferences and cut down on rework costs before ground is even broken.",

    // Main Content
    video:
      "https://player.vimeo.com/video/586889339?h=21bde86413&title=0&byline=0&portrait=0",
    mainText:
      "Architecture, engineering, and construction are being transformed through VR/AR technology. Now, homes can be marketed before construction begins and incorporate homeowners' design preferences from the ground-up. Homeowners can visualize the exterior and interior of the home in VR/AR, allowing architects and engineers to accommodate design and functionality requirements while cutting down on rework costs before ground is even broken.",

    // Bullet Content
    bTitle1: "Showcase Realistic Models",
    bText1:
      "Instead of passively describing designs and capabilities, use AR to showcase models of previous and future builds to clients.",

    bTitle2: "Cut Down on Rework Costs",
    bText2: (
      <p>
        Rework costs are{" "}
        <ExternalLink href="https://www.12dsynergy.com/blog/reducing-rework-engineering/#:~:text=In%20the%20Architecture%2C%20Engineering%20and,on%20a%20%2410%20million%20project">
          especially costly
        </ExternalLink>{" "}
        in the AEC industry, but design proposals realized in VR/AR allow
        progress to be made without ground being broken.
      </p>
    ),

    bTitle3: "Interior Decor Previews",
    bText3:
      "Enable users to preview a wide variety of furniture, lighting, and interior design options with AR simulations.",

    bTitle4: "Review Construction Options",
    bText4:
      "AEC professionals can use VR/AR platforms to visualize an area's potential construction options to regulatory bodies and potential investors alike.",
    fImage: HConstruction,

    // Partners
    pImages1: KPF,
    pImages2: Suffolk,
    pImages3: FXC,
    pImages4: Pella,

    pLinks1: "https://kpf.com/",
    pLinks2: "https://www.suffolk.com/",
    pLinks3: "http://www.fxcollaborative.com/",
    pLinks4: "https://www.pella.com/",

    pAlt1: "Kohn Pedersen Fox",
    pAlt2: "Suffolk",
    pAlt3: "FXCollaborative",
    pAlt4: "Pella Door Company",
  },

  {
    id: 112,
    btnTitle: "K-12 Education",
    name: "K-12 Education",
    link: "k12-education",
    // Homepage Cards
    hImage: HK12,
    hIcon: HK12Icon,
    content:
      "VR/AR educational tools enhance in-person and remote learning. Immersive learning spaces, presentation tools and virtual field trips elevate traditional classrooms to engage students in a meaningful way.",

    // Main Content
    video:
      "https://player.vimeo.com/video/582304954?h=59a4792128&byline=0&title=0&portrait=0",
    mainText:
      "VR/AR complements traditional classroom learning and enhances remote education. Immersive learning tools strengthen classroom and remote learning, while shared digital spaces and virtual field trips elevate remote learning. Familiarizing students with VR/AR technology prepares them for the workplace of the future.",

    // Bullet Content
    bTitle1: "AR Learning Materials",
    bText1:
      "Transform books and worksheets into dynamic learning tools that feature quizzes, 3D models, videos, and more.",

    bTitle2: "Boost Enrollment",
    bText2:
      "Adopting VR/AR educational technology positions your school above the rest. Virtual tours and testimonials from real students allow prospective students to learn more about your school.",

    bTitle3: "Virtual Field Trips",
    bText3:
      "Use VR to transport students to tour magical libraries, excavate rock formations, and explore new environments in-person and remotely.",

    bTitle4: "Digital Home Room",
    bText4:
      "Classroom learning in VR/AR bridges the social gap between remote and in-person education, enabling students to share a digital space and showcase schoolwork with one another in real time.",

    fImage: KLearning,

    // Partners
    pImages1: FordHam,
    pImages2: Sacred,
    pImages3: Temple,
    pImages4: PWC,

    pLinks1: "https://www.fordham.edu/",
    pLinks2: "https://www.sacredheart.edu/",
    pLinks3: "https://www.temple.edu/",
    pLinks4: "https://pwc.com/",

    pAlt1: "Fordham University",
    pAlt2: "Sacred Heart University",
    pAlt3: "Temple University - Philadelphia",
    pAlt4: "PricewaterhouseCoopers",
  },

  {
    id: 113,
    btnTitle: "Higher Education",
    name: "Higher Education",
    link: "higher-education",
    // Homepage Cards
    hImage: HHigherEd,
    hIcon: HHigherEdIcon,
    content:
      "Enhance education at the highest level by utilizing VR/AR presentation and research tools as well as specialized classroom technologies to challenge and inspire students.",

    // Main Content
    video:
      "https://player.vimeo.com/video/652134375?h=5bc6d23b9c&title=0&byline=0&portrait=0",
    mainText:
      "Enhance education at the highest level by using VR/AR to challenge and inspire students. Improve remote learning with immersive educational environments and reinforce in-person learning with specialized classroom technology. Equip students with the latest VR/AR tools for presentation and research and boost enrollment by adopting innovative educational techniques.",

    // Bullet Content
    bTitle1: "Virtual Campus Tours",
    bText1:
      "Utilize AR school tours to boost enrollment, showcasing the adoption of cutting-edge educational technologies.",

    bTitle2: "Experiential Learning",
    bText2:
      "VR simulations provide realistic practical experience for developing soft and hard skills, preparing students for any vocation.",

    bTitle3: "Digital Workspace",
    bText3:
      "VR gives students a vast digital workspace to organize research, visualize data, and reach new conclusions.",

    bTitle4: "Virtual Classrooms",
    bText4:
      "Take advantage of specialized classroom technologies in VR such as AI note-takers, whiteboards, and special 360-video for remote and in-person learning.",

    fImage: HigherEd,

    // Partners
    pImages1: FordHam,
    pImages2: Sacred,
    pImages3: Temple,
    pImages4: PWC,

    pLinks1: "https://www.fordham.edu/",
    pLinks2: "https://www.sacredheart.edu/",
    pLinks3: "https://www.temple.edu/",
    pLinks4: "https://pwc.com/",

    pAlt1: "Fordham University",
    pAlt2: "Sacred Heart University",
    pAlt3: "Temple University - Philadelphia",
    pAlt4: "PricewaterhouseCoopers",
  },

  {
    id: 114,
    btnTitle: "Food & Hospitality",
    name: "Food & Hospitality",
    link: "food-hospitality",

    // Homepage Cards
    hImage: HFood,
    hIcon: HFoodIcon,
    content:
      "Outfit your menus with AR features to share high-quality 3D models of your dishes, create engagement opportunities with branded VR/AR promotions and add dynamic information with interactive AR labeling.",

    // Main Content
    video:
      "https://player.vimeo.com/video/652203666?h=ede5af1784&byline=0&title=0&portrait=0",
    mainText:
      "Enhance experiences for your customers with VR/AR technology. Outfit your menus with AR to share high-quality 3D models of your dishes, leading to well-informed and satisfied customers. Create branded VR/AR promotions for live events and travel opportunities, ensuring your guests have exciting and memorable experiences. Embed dynamic information into your products with interactive AR labeling.",

    // Bullet Content
    bTitle1: "Host Live Events in VR",
    bText1:
      "Reinvent traditional 2D live video events into groundbreaking 3D entertainment experiences with Virtual Reality.",

    bTitle2: "Visualize Dishes in AR",
    bText2:
      "Increase Point of Sale and inform your customers by outfitting traditional menus with high-quality 3D models of your dishes. Embed AR visualizations in articles and promotions which reference your dishes to build customer interest.",

    bTitle3: "Interactive Packaging",
    bText3:
      "Add dynamic information to a product's packaging to encourage purchases and gamify product consumption. Inform your customers and make your products more memorable with VR/AR labeling.",

    bTitle4: "AR Promoting Tourism",
    bText4:
      "Make the pictures you take on vacation even more memorable by adding AR features. Enliven landscapes, pair photos with AR-outfitted destinations, and share your travel experiences with other users.",
    fImage: Food,

    // Partners
    pImages1: Panera,
    pImages2: Magnolia,
    pImages3: Dominos,
    pImages4: Swiss,

    pLinks1: "https://www.panerabread.com/en-us/home.html",
    pLinks2: "https://www.magnoliabakery.com/",
    pLinks3: "https://dominos.com",
    pLinks4: "https://www.swisschalet.com/en.html",

    pAlt1: "Panera Bread",
    pAlt2: "Magnolia Bakery",
    pAlt3: "Dominos",
    pAlt4: "Swiss Chalet",
  },

  {
    id: 115,
    btnTitle: "Professional Training",
    name: "Professional Training",
    link: "professional-training",

    // Homepage Cards
    hImage: HTraining,
    hIcon: HTrainingIcon,
    content:
      "Provide convenient, comfortable spaces for practicing and acquiring both hard skills and soft skills using VR/AR. Simulate on-the-job experience for professions hinged on practical training and experiential learning.",

    // Main Content
    video:
      "https://player.vimeo.com/video/668674296?h=e237ef9707&byline=0&title=0&portrait=0",
    mainText: (
      <p>
        VR/AR offers convenient, comfortable spaces for practicing and acquiring
        both hard skills and soft skills remotely, as well as analytics to
        optimize the training process.
        <br />
        VR/AR training for hard skills – technical skills which can be
        quantified – simulates on-the-job experience for professions hinged on
        practical training while reducing associated costs. VR/AR can also be
        used to train soft skills like public speaking, negotiation, and
        networking, enabling crucial trial-and-error experience in a
        pressure-free environment.
        <br />
        VR/AR platforms offer comprehensive professional training, orientation
        for new employees, and accurately replicated workplaces to smoothen the
        onboarding process.
      </p>
    ),

    // Bullet Content
    bTitle1: "Safety Training",
    bText1:
      "Safety training in VR provides intuitive controls and explanatory instructions, ensuring preparedness for emergency situations.",

    bTitle2: "Hard Skills Training",
    bText2:
      "VR/AR technology allows trainees to acquire crucial on-the-job experience, practicing challenging procedures and receiving immediate constructive feedback.",

    bTitle3: "Soft Skills Training",
    bText3:
      "Train your team in public speaking, creative thinking, negotiating, and pitching ideas in realistic business and entrepreneurial situations.",

    bTitle4: "Training Analytics and Feedback",
    bText4:
      "VR/AR training platforms allow instructors to receive performance analytics in the moment, enabling them to understand training efficacy and adjust their methods in real time.",
    fImage: Training,

    // Partners
    pImages1: Glu,
    pImages2: Unreal,
    pImages3: Verizon,
    pImages4: Samsung,

    pLinks1: "https://glu.com/",
    pLinks2: "https://www.unrealengine.com/en-US/",
    pLinks3: "https://verizon.com/",
    pLinks4: "https://samsung.com/",

    pAlt1: "Glu Mobile",
    pAlt2: "Unreal",
    pAlt3: "Verizon",
    pAlt4: "Samsung",
  },

  {
    id: 116,
    btnTitle: "Data Visualization",
    name: "Data Visualization",
    link: "finance-data-visualization",

    // Homepage Cards
    hImage: HFinance,
    hIcon: HFinanceIcon,
    content:
      "Visualize and process data in 3D space for more insightful data analysis and customize your own VR workstation to revolutionize workflow. Use VR/AR to present your data story compellingly and clearly.",

    // Main Content
    video: "https://www.youtube.com/embed/hZBN1t2Ott4",
    mainText:
      "Visualize, present, and share data in 3D space for more insightful data analysis. Customize your own VR workstation to revolutionize workflow and connect with clients remotely in VR to simplify complex concepts with 3D presentation tools. Collaborate with colleagues and accelerate team-based objectives in a comprehensive, intuitive virtual workspace. Telling your data story in 3D not only makes for more memorable presentations, but unlocks a level of clarity impossible for conventional 2D charts, graphs, and presentation tools.",

    // Bullet Content
    bTitle1: "Coworking Environment",
    bText1:
      "Enhance projects with coworkers by collaborating in an immersive virtual workspace. Accelerate joint efforts by communicating in real time and visualizing ideas in 3D.",

    bTitle2: "Wealth Management Consultation",
    bText2:
      "Exceed the standards of in-person consultation by connecting with your clients and colleagues around the globe in a 360° virtual environment. Clearly communicate complex concepts with 3D visualization and presentation tools.",

    bTitle3: "Customizable Workstation",
    bText3:
      "Your highly customizable VR workspace enhances and accelerates investment research and data analysis. Utilize up to 18 monitors and a variety of intuitive configurations to personally suit your workflow.",

    bTitle4: "Present Financial Research",
    bText4:
      "Create immersive presentations in Virtual Reality which impress and inspire. Visualizing data in VR allows for engaging presentations which outperform ordinary presentations.",
    fImage: Finance,

    // Partners
    pImages1: Glu,
    pImages2: Unreal,
    pImages3: Verizon,
    pImages4: Samsung,

    pLinks1: "https://glu.com/",
    pLinks2: "https://www.unrealengine.com/en-US/",
    pLinks3: "https://verizon.com/",
    pLinks4: "https://samsung.com/",

    pAlt1: "Glu Mobile",
    pAlt2: "Unreal",
    pAlt3: "Verizon",
    pAlt4: "Samsung",
  },

  {
    id: 117,
    btnTitle: "Healthcare",
    name: "Healthcare",
    link: "healthcare",

    // Homepage Cards
    hImage: HHealth,
    hIcon: HHealthIcon,
    content:
      "Use VR/AR to train healthcare professionals, allow patients receiving care on-site to feel more comfortable and secure and compliment both physical and mental/emotional therapy.",

    // Main Content
    video:
      "https://player.vimeo.com/video/652134375?h=5bc6d23b9c&title=0&byline=0&portrait=0",
    mainText:
      "VR/AR technology is transforming healthcare practices and training programs. Healthcare professionals receiving hard skill training in VR/AR can practice difficult procedures in a low-pressure environment. Patients receiving care can feel more comfortable in treatment centers with VR/AR experiences. Both physical therapy and mental/emotional therapy benefit from the conveniences of VR/AR technology.",

    // Bullet Content
    bTitle1: "Clinical Training",
    bText1:
      "VR/AR-based training enables upcoming healthcare professionals to safely acquire on-the-job experience, practicing procedures and receiving constructive feedback in the moment.",

    bTitle2: "Pediatric Distraction Therapy",
    bText2:
      "VR/AR comforts patients by transforming ordinary hospital rooms into vivid, colorful artscapes. Patients who are physically separated can be brought together in virtual environments, providing a sense of agency to patients receiving treatment on-site.",

    bTitle3: "Physical Therapy",
    bText3:
      "Physical therapy conducted in VR allows the therapist to personalize and fine-tune exercises within a given application, making physical therapy more convenient and engaging for patients.",

    bTitle4: "Remote Therapy Sessions",
    bText4:
      "Lifelike avatars, gestures, and virtual environments lend a sense of realism to remote therapy, allowing it to be just as effective and more convenient than in-person therapy.",

    fImage: Healthcare,

    // Partners
    pImages1: Montefiore,
    pImages2: Mount,
    pImages3: Yale,
    pImages4: BostonSchool,

    pLinks1: "https://www.montefiore.org/",
    pLinks2: "https://www.mountsinai.org/",
    pLinks3: "https://www.ynhh.org/",
    pLinks4: "https://www.bumc.bu.edu/busm/",

    pAlt1: "Montefiore Medical Center",
    pAlt2: "Mount Sinai",
    pAlt3: "Yale New Haven Hospital",
    pAlt4: "Boston University School of Medicine",
  },

  {
    id: 118,
    btnTitle: "Marketing",
    name: "Marketing",
    link: "marketing",

    // Homepage Cards
    hImage: HMarketing,
    hIcon: HMarketingIcon,
    content:
      "Enhance your ecommerce and brick-and-mortar shopping experiences and create engagement opportunities for consumers in both print and digital media with activated VR/AR marketing.",

    // Main Content
    video:
      "https://player.vimeo.com/video/673990931?h=386b1ccc5c&title=0&byline=0&portrait=0",
    mainText: (
      <p>
        By utilizing VR/AR technology, retail companies can enhance their
        ecommerce sites, reinforce brick-and-mortar locations, and create
        engagement opportunities for consumers with activated VR/AR marketing.{" "}
        <br />
        <br /> Virtual showrooms and fitting rooms allow customers to try on
        products from home using AR filters, reducing returns and boosting
        consumer confidence. Conduct social media campaigns with branded AR
        filters and games, increasing brand retention and gamifying
        advertisements. Enliven print media with paired AR experiences,
        displaying dynamic information and other marketing activations directly
        on product packaging.
      </p>
    ),

    // Bullet Content
    bTitle1: "AR Social Media Promotions",
    bText1:
      "Create engagement opportunities through customizable social media campaigns by integrating branded AR filters and games.",

    bTitle2: "AR Packaging",
    bText2:
      "Add dynamic information to product labels, gamifying product packaging to encourage purchases. Bring product images and other print media to life by pairing them with AR experiences.",

    bTitle3: "AR Branding Experiences",
    bText3:
      "Enhance a product or service with a paired AR experience to increase retention and equity in the brand.",

    bTitle4: "Virtual Fitting Rooms",
    bText4:
      "Normally, online shoppers can't test or try on the products they're buying. Now customers can use AR filters to virtually try products on, bolstering consumer confidence and reducing return rates.",

    fImage: Marketing,

    // Partners
    pImages1: Anomaly,
    pImages2: RedFuse,
    pImages3: WPP,
    pImages4: IPG,

    pLinks1: "https://anomaly.com/",
    pLinks2: "https://www.wpp.com/companies/wpp-red-fuse",
    pLinks3: "https://www.wpp.com/",
    pLinks4: "https://www.interpublic.com/",

    pAlt1: "Anomaly",
    pAlt2: "Red Fuse Communications",
    pAlt3: "WPP",
    pAlt4: "The Interpublic Group of Companies",
  },

  {
    id: 119,
    btnTitle: "Events & Meetings",
    name: "Events & Meetings",
    link: "events-and-meetings",

    // Homepage Cards
    hImage: HRetail,
    hIcon: HRetailIcon,
    content:
      "Enhance your next industry conference, corporate event, workplace meeting, or personal gathering with immersive VR/AR technology.",

    // Main Content
    video:
      "https://player.vimeo.com/video/697116073?h=1fc3391f29&title=0&byline=0&portrait=0",
    mainText:
      "VR/AR technology enhances your industry conferences, corporate events, and meetings both personal and professional. Seamlessly collaborate with coworkers in VR, ensuring productive workflow remotely and in the office. Hosting corporate events in VR facilitates networking and contact info collection, making events easier to attend and more valuable to your brand. Digital avatars relieve tension in high-pressure presentations and emotionally intimate support group settings.",

    // Bullet Content
    bTitle1: "Corporate Meetings",
    bText1:
      "Personalized avatars and seamless virtual environments allow for productive and insightful meetings with coworkers and clients.",

    bTitle2: "Business Presentations",
    bText2:
      "Business presentations conducted in VR are more compelling and comprehensive compared to conventional in-person presentations.",

    bTitle3: "Professional Events",
    bText3:
      "Conventions, exhibitions, and conferences in VR allow you to effortlessly network with industry colleagues and liaise with potential clients.",

    bTitle4: "Support Groups",
    bText4:
      "VR breaks down traditional barriers to support group therapy, addressing issues of social stigma and public discomfort with anonymized avatars.",
    fImage: Events,

    // Partners
    pImages1: Colgate,
    pImages2: Chanel,
    pImages3: Bolle,
    pImages4: American,

    pLinks1: "https://www.colgate.com/en-us",
    pLinks2: "https://www.chanel.com/us/",
    pLinks3: "https://www.bolle.com/us/",
    pLinks4: "https://www.ae.com/us/en",

    pAlt1: "Colgate",
    pAlt2: "Chanel",
    pAlt3: "Bolle",
    pAlt4: "American Eagle Outfitters",
  },
];

export default allindustries;
