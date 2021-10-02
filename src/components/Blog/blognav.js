import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Step1 from '../assets/Blogimages/Steps/step1.png';
import Step2 from '../assets/Blogimages/Steps/step2.png';
import Step3 from '../assets/Blogimages/Steps/step3.png';
import Step4 from '../assets/Blogimages/Steps/step4.png';
import Step5 from '../assets/Blogimages/Steps/step5.png';
import Step6 from '../assets/Blogimages/Steps/step6.png';
import Step7 from '../assets/Blogimages/Steps/step7.png';

const Heading = styled.h1`
font-size: 2em;
text-align: left;
color: grey;
margin-top: 1rem;
`
const Section = styled.section`
  padding: 1.5em;
 
`;
const Definition = styled.p`

  color: rgb(214, 62, 62)
 
`;
const Image = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
margin-top:1rem;
margin-bottom:1rem;
`;
const Title = styled.h6`
font-size: 1.2em;
color: rgb(218, 62, 62);
font-weight :bold;
font-family : "Gill Sans", serif;
margin-top : 1rem;
`;
export default function BlogNav() {
   
  return (
      <>
      <div  className={'row justify-content-center '}>
          
      <Grid
       container
       direction="row"
       justifyContent="center"
       alignItems="center"
      >
      
        <Grid item xs={2}>
            <Title>
            Home
                </Title>
           
        </Grid>
        <Grid item xs={2}>
            <Title>

           Hacktoberfest Rules
           </Title>
        </Grid>
        <Grid item xs={2}>
            <Title>
           Repo Link
           </Title>
        </Grid>
      </Grid>
     

      </div>
      <Section>
        <Heading>
            What is Hacktoberfest ?
        </Heading>
        <Definition>
            Hacktoberfest is a Program for Open-Source Contributors conducted in the month of October.
            It encourages participation in the open source community. Participants can earn a limited edition T-shirt &amp; 
            stickers by contributing.There are some rules you need  to follow . 
            <br />
            <strong>Below steps and Rules are mentioned </strong>
        </Definition>
        <Heading>
          Steps To be the Participant.
        </Heading>
        <Definition>
         1.) Register on the official website of Hacktoberfest.
             <strong>Click on Start Hacking</strong> .
              <br />
             <Image src={Step1} /><br/>
        
        
         3.) Login with <a href="https://github.com/"> Github </a> / <a href="https://gitlab.com/">GitLab. </a> <br/>
         <Image src={Step2} /><br/>
        
         4.) Update Your Details. <br/>

             a.) Name  <br/>
             b.) Email <br/>
             c.) Location  <br/>
             <Image src={Step3} /><br/>
            
         5.) Select the designation you want . <br/>
             a.) Maintainer :- It is the one who owns the repository which is participating in Hacktoberfest.  <br/>
             The maintainer puts the label of <b>hacktoberfest</b> on Issues and when your PR(Pull request) gets approved
             he/she merges it under label <b>hacktoberfest-accepted</b>.    <br/>
             b.) Event Organizer :- <br/>
             c.) Participant :- These are  refered to as persons who are participating in hacktoberfest . If atleast
             4 PR's gets merged they are considered as contributors &amp; are eligible for the goodies . <br/>
             <Image src={Step4} /><br/>
          6.) Go to the repository which are participating in Hacktoberfest. Below are some points from where you can find the
          repository which are participating in Hacktoberfest.<br/>

             a.) Hacktoberfest Discord Channel .<br/>
             b.) Labels on repo <strong>hacktoberfest</strong>   <br/>
             c.) Labels on Issues <strong>hacktoberfest</strong>  <br/> 
             d.) Hacktoberfest-Checker (Repository);<br/>

           7.) After you have created PR(Pull Request) it will be visible as <b><i>
               Pull request not yet accepted</i></b>  <br/>
               <Image src={Step5} /><br/>
           8.) When PR gets approved by the maintainer then it will show <b><i>
              Matures in 13 days</i></b><br/>
              <Image src={Step6} /><br/>
           9.) If it is Showing <b><i>Excluded Project</i></b> that means the repository where the PR is created is 
           not considered for "Hacktoberfest2021". <br/>
           <Image src={Step7} /><br/>



        </Definition>
      </Section>
      </>
  );
}
