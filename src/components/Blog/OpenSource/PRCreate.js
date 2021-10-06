import * as React from 'react';
import styled from 'styled-components';
import Step1 from '../../assets/Blogimages/Pr/step1.png'
import Step9 from '../../assets/Blogimages/Pr/step9.png'
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

export default function PRCreate() {
  return (
    <>
        <Heading>
          How to create PR for <strong>Hacktoberfest.</strong>?
        </Heading>
        <Definition>
         <strong>Step to Step Guide to Create PR(Pull Request).</strong> <br />
          1). Clone the forked repository to your local machine. <br />
          <b><i>$ git clone address of the repo.git</i></b>
            <Image src={Step1} /> <br />
          2). Change the present working directory  <br />
          <b><i>cd RepositoryName</i></b> <br/>
          3). Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. 
          Now we will add a remote to the original repository from where we had forked. <br />
          <b><i>$ git remote add upstream address of the repo.git</i></b> <br /> 
          4). <b>Synchronizing your fork</b> <br /> 
          Open Source projects have a number of contributors who can push code anytime. 
          So it is necessary to make your forked copy equal with the original repository. 
          The remote added above called Upstream helps in this. <br />
          <b><i>- $git checkout branch name where the work is going (eg:- main or dev incase of hactoberfest-checker) </i></b> <br/> 
          <b><i>- $ git checkout branchname </i></b>  <br />
          <b><i>- $ git fetch upstream  </i></b>  <br />
          <b><i>- $ git merge upstream/branchname </i></b>  <br />
          <b><i>- $ git push origin branchname </i></b>  <br />
          5). Add/Create your project to the specific folder as described in what you can contribute section. (Your Commits) <br />
          6). Make a new branch <br />
            <b><i>git checkout -b branch-name</i></b>   <br />
          7). Make change in the repository with the new branch. <br />
          8). Push the changes. <br />
          <b><i>  - $git add . <br /> </i> </b>
          <b><i>  - $git commit -m "Your commit Message" <br />  </i> </b>
          <b><i>  - $git push origin branch-name <br /> </i> </b>
         9). Make a pull request. Click on create pull request and add a name to your pull request <br /> 
         <Image src={Step9} /> 
     
        </Definition>  
     <Heading>
       FAQ's
     </Heading>
     <Definition>
       1). How to create Issue? <br />
       2). How to become Open Source Contributor? <br />
       3). How to upload Projects On Github? <br />
       4). How to use VS code for Github? <br />
       5). How to use Gitbash for Github? <br />
     </Definition>
    
    </>
  );
}
