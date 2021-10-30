import * as React from 'react';
import styled from 'styled-components';
import Step1 from '../assets/Blogimages/Steps/step1.png';
import Step2 from '../assets/Blogimages/Steps/step2.png';
import Step3 from '../assets/Blogimages/Steps/step3.png';
import Step4 from '../assets/Blogimages/Steps/step4.png';
import Step5 from '../assets/Blogimages/Steps/step5.png';
import Step6 from '../assets/Blogimages/Steps/step6.png';
import Step7 from '../assets/Blogimages/Steps/step7.png';

const Heading = styled.h2`
  text-align: left;
  color: rgb(214, 62, 62);
  margin-top: 1rem;
`;

const Definition = styled.p`
  font-size: 1.4rem;
  margin-block: 40px;
`;
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border: 1px solid red;
  margin-block: 40px;
  border-radius: 10px;
`;

export default function HacktoberFestSteps() {
  return (
    <>
      <Heading>
        What is <strong>Hacktoberfest</strong>?
      </Heading>
      <Definition>
        <a href={'https://hacktoberfest.digitalocean.com'}>
          <strong>Hacktoberfest </strong>
        </a>
        is a Program for Open-Source Contributors conducted in the month of
        October. It encourages participation in the open source community.
        Participants can earn a limited edition T-shirt &amp; stickers by
        contributing.There are some rules you need to follow .
        <br />
        <strong>Below steps and Rules are mentioned </strong>
      </Definition>
      <Heading>Steps To be the Participant.</Heading>
      <Definition>
        1). Register on the official website of{' '}
        <strong>
          <a href={'https://hacktoberfest.digitalocean.com'}>Hacktoberfest </a>
        </strong>
        .<strong>Click on Start Hacking</strong>.
        <br />
        <Image src={Step1} />
        <br />
        3). Login with <a href="https://github.com/"> Github </a> /{' '}
        <a href="https://gitlab.com/">GitLab. </a> <br />
        <Image src={Step2} />
        <br />
        4). Update Your Details. <br />
        a). Name <br />
        b). Email <br />
        c). Location <br />
        <Image src={Step3} />
        <br />
        5). Select the designation you want . <br />
        a). Maintainer :- It is the one who owns the repository which is
        participating in <strong>Hacktoberfest</strong>. <br />
        The maintainer puts the label of{' '}
        <b>
          <strong>hacktoberfest</strong>
        </b>{' '}
        on Issues and when your PR(Pull request) gets approved he/she merges it
        under label{' '}
        <b>
          <strong>hacktoberfest</strong>-accepted
        </b>
        . <br />
        b). Event Organizer :- <br />
        c). Participant :- These are refered to as persons who are participating
        in <strong>hacktoberfest</strong> . If atleast 4 PR's gets merged they
        are considered as contributors &amp; are eligible for the goodies .{' '}
        <br />
        <Image src={Step4} />
        <br />
        6). Go to the repository which are participating in{' '}
        <strong>Hacktoberfest</strong>. Below are some points from where you can
        find the repository which are participating in{' '}
        <strong>Hacktoberfest</strong>.
        <br />
        a). <strong>Hacktoberfest</strong>{' '}
        <a href="https://discord.com/invite/hacktoberfestDiscord">
          Discord Channel.
        </a>
        <br />
        b). Labels on repo{' '}
        <strong>
          <strong>hacktoberfest</strong>
        </strong>{' '}
        <br />
        c). Labels on Issues (optional){' '}
        <strong>
          <strong>hacktoberfest</strong>
        </strong>{' '}
        <br />
        d).{' '}
        <strong>
          {' '}
          <a href="https://github.com/genialkartik/hacktoberfest-checker">
            Hacktoberfest-Checker
          </a>
        </strong>{' '}
        (Repository)
        <br />
        7). After you have created PR(Pull Request) it will be visible as{' '}
        <b>
          <i>Pull request not yet accepted</i>
        </b>{' '}
        <br />
        <Image src={Step5} />
        <br />
        8). When PR gets approved by the maintainer then it will show{' '}
        <b>
          <i>Matures in 13 days</i>
        </b>
        <br />
        <Image src={Step6} />
        <br />
        9). If it is Showing{' '}
        <b>
          <i>Excluded Project</i>
        </b>{' '}
        that means the repository where the PR is created is not considered for
        "<strong>Hacktoberfest</strong>2021". <br />
        <Image src={Step7} />
        <br />
      </Definition>
    </>
  );
}
