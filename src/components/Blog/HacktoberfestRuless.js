import * as React from 'react';
import styled from 'styled-components';


const Heading = styled.h1`
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

export default function HacktoberFestRules() {
  return (
    <>
    
      
      
        <Heading>Rules To be Followed during the Hacktoberfest.</Heading>
        <Definition>
          1). The pull request must contain commits you made yourself.
          <br />
     
          2). If a maintainer reports your pull request as spam, 
          it will not be counted toward your participation in Hacktoberfest
          <br />
          3).  If a maintainer reports behavior that’s not in line with the project’s code of conduct, 
          you will be ineligible to participate.
          <br />
          4). A pull request is considered approved once it has an overall approving review from maintainers,
           or has been merged by maintainers, or has been given the 'hacktoberfest-accepted' label. <br />
          
          5). All pull requests created between Oct 1 and Oct 31 will count, regardless of when you register for Hacktoberfest. < br/>
        6). Pull requests created before Oct 1 but merged or marked as ready for review after do not count.  <br />
        7). Pull requests that are still in review after Oct 31 and meet the criteria will count towards your completion goal.  <br />
        </Definition>
    
    </>
  );
}
