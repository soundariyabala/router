import React from 'react'
import Nav from './components/Nav';
import All from './components/All';
import Full from './components/Full';
import Data from './components/Data';
import Cyber from './components/Cyber';
import Career from './components/Career';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";


function App() {
   let fsd=[{image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
               title:"Full Stack Dvelopment",
               paragraph:"Most of the web developers go through all the above phases and initially it might be frustrating for some of them, but the overall feeling is really exciting and amazing when they see their website is live and people are using it all over the world.backend languages and frameworks (JavaScript, Django, NodeJS, etc) and Database management systems (MySQL, SQL, MongoDB, etc). "},
               {image:"https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XH3rLskyOsCqVV-j.jpg",
                title:"Full Stack Development",
                paragraph:"The term “Full-Stack” Developer has become very popular in recent years. When I started my career almost 10 years ago now people just simply refer to themselves  Problem Solving is the skill that full stack developer should have.as simply either Software Developers/Engineers or Web Developers."},
                {image:"https://reviewnprep.com/blog/wp-content/uploads/2022/10/Full-Stack-Developer-Guide.png",
                 title:"Full Stack Development",
                 paragraph:"Full-stack development has become increasingly popular in recent years. Full-stack developers are well-rounded professionals who can handle a wide variety of tasks, such as programming, design, databases, and debugging for websites and applications.Full-stack developers are well-rounded professionals ."},
                {image:"https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-developer.jpeg",
                 title:"Full Stack Development",
                 paragraph:"Some skills that are very necessary for a full stack developer are frontend languages and frameworks (HTML, CSS, JavaScript)Full-stack developers are well-rounded professionals who can handle a wide variety of tasks, such as programming, "},
                {image:"https://ais-10072.kxcdn.com/wp-content/uploads/2022/12/Complete-List-Of-Full-Stack-Developer-Tools-To-Look-For-in-2023.jpg",
                 title:"Full Stack Development",
                paragraph:"Every business from different verticals continues to move online and adopt the latest technology. It helps them tackle everything from design and front-end development to back-end development, along with data management. Therefore, full-stack developers' needs will increase skill that full stack developer should have significantly in 2023."},
                {image:"https://static.javatpoint.com/blog/images/how-to-be-a-full-stack-developer.png",
                 title:"Full Stack Development",
                 paragraph:"The application front-end team performs some specific tasks related to UI design and UX or User Experience. In contrast, other team members deal with the backend logic and API part required for the application to run. A Full Stack Developer comes into the picture whenever the application needs to summarize the application's working."}];
  let ds=[{image:"https://media.istockphoto.com/id/1364317541/photo/data-scientists-hand-of-programmer-touching-and-analyzing-development-at-various-information.jpg?s=612x612&w=0&k=20&c=mTnPYtYYxbyOdyeBQcu8LIWwD-31SIIfXSd0IEhhpYg=",
             title:"Data Science",
             paragraph:"Data science is the study of data to extract meaningful insights for business.Data Science is a field that gives insights from structured and unstructured data, using different scientific methods and algorithms, and consequently helps in generating insights, making predictions and devising data driver solutions.  It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data."},
            {image:"https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/07/image-2-41-600x600.jpg",
             title:"Data Science",
             paragraph:"Data Science is a field that gives insights from structured and unstructured data, using different scientific methods and algorithms, and consequently helps in generating insights, making predictions and devising data driver solutions. It uses a large amount  and computation for decision making."},
             {image:"https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/07/image-4-25-600x350.jpg",
             title:"Data Science",
              paragraph:"There are some other skills too that Data Scientists must know apart from the discussed four primary areas. Data Science is a field that gives insights from structured and unstructured data, using different scientific methods and algorithms, and consequently helps in generating insights, making predictions and devising data driver solutions. These can be referred to as the pillars of Data Science. Usually, people lack expertise in one or two of these areas that makes it difficult for them to perform better in the field."},
              {image:"https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/07/image-5-25-3.jpg",
             title:"Data Science",
              paragraph:"The first phase consists of defining the business problem because a well-defined problem statement defines a specific goal and is the key to the success of the project. The main goal is to get an understanding of the business problem, the domain of the business problem, and the kind of solution the business seeks. "},
              {image:"https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/07/image-3-38-3.jpg",
              title:"Data Science",
               paragraph:"Mathematical computation is the main skill that a Data Scientist needs to have in addition to the creative thinking and analytical mindset. They should be able to analyze the data and find hidden trends. They need to ask the right sets of questions to get the business understanding and create a business problem so that the required output can be expected."},
               {image:"https://intellipaat.com/blog/wp-content/uploads/2022/06/image-149.png",
               title:"Data Science",
                paragraph:"This is where you start by clearly defining the problem you want to solve using data.Data Science is a field that gives insights from structured and unstructured data, using different scientific methods and algorithms, and consequently helps in generating insights, making predictions and devising data driver solutions.  It crucial to have a well-defined goal. For example, you might want to predict customer churn for a business or detect fraud in financial transactions."}];


    let cs=[{image:"https://redsquid.co.uk/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGcmVkc3F1aWQuY28udWslMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjMlMkYwMyUyRkhvdy1Uby1Qcm9tb3RlLUN5YmVyLVNlY3VyaXR5LUF3YXJlbmVzcy0xLmpwZyZjYWNoZU1hcmtlcj0xNjgwMDk1MjExLTM2NzA0MCZ0b2tlbj00YTY1MjM2ODNlODZiZDA3.q.jpg",
             title:"Cyber Security",
             paragraph:"Cybersecurity is a practice in information technology that ensures the safeguarding and protection of devices  Therefore, its essential for cybersecurity professionals to continually learn and adapt to new types of threats. To handle cybersecurity skills shortages, organizations can adapt the same models they’ve traditionally(laptops, desktops, mobiles, tablets etc.), networks, and programs from digital threats such as hacks, and computer viruses."},
             {image:"https://emeritus.org/wp-content/uploads/2022/01/Cybersecurity-Feature.webp",
             title:"Cyber Security",
             paragraph:"The nature of cybersecurity in the insurance industry and financial services is that It constantly evolving. Therefore, its essential for cybersecurity professionals to continually learn and adapt to new types of threats. To handle cybersecurity skills shortages, organizations can adapt the same models they’ve traditionally used to grow their cybersecurity teams, but also add new pathways for employees in other areas to switch to cybersecurity roles. "},
             {image:"https://www.assetguardian.com/wp-content/uploads/2023/05/iStock-1288122718-768x396.jpg",
             title:"Cyber Security",
             paragraph:"In many cases, there is no alternative to AI. A much larger attack surface, the sheer mass of data being generated, and the speed of response required, coupled with the lack of skilled cyber security professionals means that companies must rely on automated processes, data analytics and artificial intelligence to manage many of their cyber security activities."},
             {image:"https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1-1024x632.jpeg",
             title:"Cyber Security",
             paragraph:"Cyber security, which is also known as information technology security, implements techniques to protect computing systems, cyber networks, online programmes, and all sensitive data from unwanted external attacks by hackers. The safety of a cyber network is determined by how advanced its cyber security system. "},
             {image:"https://reciprocity.com/wp-content/uploads/2022/03/faq_why-is-cybersecurity-important_featured-img_730x270_small.jpg",
             title:"Cyber Security",
             paragraph:"Phishing schemes, ransomware attacks, privacy breaches, and other cyber threats all aim to pilfer the sensitive data stored on your IT systems. These nightmares threaten your business, financial standing, and your reputation. They also threaten all businesses, large or small, in any industry."},
             {image:"https://online.sbu.edu/sites/default/files/field/image/cybersecurity_tools_1.jpg",
             title:"Cyber Security",
             paragraph:"other cyber threats all aim to pilfer the sensitive data stored on your IT systems. These nightmares threaten your business, financial standing, and your reputation. They also threaten all businesses, large or small, in any industry."}]
             

    let career=[{image:"https://www.digitalvidya.com/blog/wp-content/uploads/2019/07/Career-Planning_11e51d7713b3dd7a9c26782ae82eb165.webp",
                 title:"Career",
                 paragraph:"The career planning process is a method of systematically matching career goals and individual capabilities with opportunities for their fulfilment.It encourages individuals to explore and gather information, which enables them to syn­thesize, gain competencies, make decisions, set goals and take action."},
                 {image:"https://www.karangupta.com/upload/gyan/5ac358371e42b.jpg",
                 title:"Career",
                 paragraph:"Your career development is something that starts in childhood and continues the rest of your life. It is influenced by a variety of factors, which include background, education, values, and personality. Those that study career development with the purpose of assisting choices are known as career counsellors."},
                 {image:"https://navigossearch.com/Data/Sites/1/media/b%C3%A0i-seo/seo-t5/14/1.jpg",
                 title:"Career",
                 paragraph:"Career path is understood as a career map, a series of jobs in a long process that brings you closer to your goals and vision in your career development plan.It is influenced by a variety of factors, which include your abilities, interests, background, education, values, and personality."},
                 {image:"https://navigossearch.com/Data/Sites/1/media/b%C3%A0i-seo/seo-t5/14/2.jpg",
                 title:"Career",
                 paragraph:"Impacts on industry development, human resource needs and potentials/challenges… will have a great impact on each person's career path. If you are not prepared both mentally and professionally, you will certainly not be able to cope with the changes that may occur. The best way is to outline a clear roadmap, long-term plan for your career development. Based on that, you will know what to do first, what to do later to gradually reach success."},
                 {image:"https://thumbs.dreamstime.com/z/career-development-chart-hand-drawing-blackboard-56251425.jpg?w=992",
                 title:"Career",
                 paragraph:"To help you explore your options, we’ve put together this ultimate list of career paths for inspiration. will have a great impact on each person's career path. If you are not prepared both mentally and professionally. If you will certainly not be able to cope with the changes you will certainly not be able to cope with the changes You can click through to each profession’s dedicated career profile to learn more about typical duties and responsibilities, salary potential, job outlook, entry requirements, and more, so you can make a more informed."},
                 {image:"https://www.cfnc.org/media/lnrf5gv0/career-sign-post.jpg",
                 title:"Career",
                 paragraph:"Equally important to knowing what you love and what you are good at is knowing what makes you you.If you are a people person, it would probably not be a good idea for you to run a library. If you are more of an introvert, you may not wantwill have a great impact on each person's career path. If you are not prepared both mentally and professionally, you will certainly not be able to cope with the changes  to get into the field of customer service or hospitality."}]


    let allcards=[...fsd,...ds,...cs,...career];


return <>
<BrowserRouter>
<Nav/>
<Routes>

  <Route path='/all'       element={<All cards={allcards}/>}/>
  <Route path='/fullstack' element={<Full stack={fsd}/>}/>
  <Route path='/dscience'  element={<Data data={ds}/>}/>
  <Route path='/cyber'     element={<Cyber security={cs}/>}/>
  <Route path='/career'    element={<Career para={career}/>}/>
  <Route path='/*'         element={<Navigate to='/all'/>}/>

</Routes>
</BrowserRouter>
</>

}

export default App