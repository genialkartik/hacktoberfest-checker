import React, { useEffect, useState } from 'react';

import { ButtonGroup } from 'react-bootstrap';
import { Avatar, AvatarGroup, Button, Tooltip } from '@mui/material';
import GithubApi from '../../api/index';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    (async () => {
      const contri = await GithubApi.getContributors();
      setContributors(contri || []);
    })();
  }, []);

  return (
    <footer
      style={{
        textAlign: 'center',
      }}
    >
      <div className="row justify-content-center">
        <a
          href="https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Contributors
        </a>
      </div>
      <div style={{ marginBlock: 20 }} className="row justify-content-center">
        <AvatarGroup
          style={{
            flexWrap: 'wrap-reverse',
            justifyContent: 'center',
            width: '85%',
            marginLeft: 8,
          }}
          max={contributors.length || 2}
        >
          {contributors?.map((contrib, idx) => (
            <Tooltip title={contrib?.login}>
              <Avatar
                alt={contrib?.login}
                key={idx}
                src={contrib?.avatar_url}
                component="a"
                target="_blank"
                rel="noreferrer"
                href={contrib?.html_url}
                sx={{ cursor: 'pointer' }}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </div>
      <div
        style={{ marginBlock: 20, marginLeft: 16, marginRight: 16 }}
        className="row justify-content-center"
      >
        Attention: This site is just a fan made project and it is not affiliated
        with
        <a
          style={{ marginLeft: 10, marginTop: 1 }}
          href="https://hacktoberfest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacktoberfest
        </a>
      </div>
      <div className="row justify-content-center">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            component={Link}
            to="/blog"
            style={{
              fontFamily: 'var(--main-font)',
              color: 'var(--main-color)',
            }}
          >
            Blog
          </Button>
          <Button
            component={'a'}
            href="http://github.com/genialkartik/hacktoberfest-checker"
            target="_blank"
            style={{
              fontFamily: 'var(--main-font)',
              color: 'var(--main-color)',
            }}
          >
            GitHub
          </Button>
          <Button
            component={'a'}
            href="https://hacktoberfest.com/"
            target="_blank"
            style={{
              fontFamily: 'var(--main-font)',
              color: 'var(--main-color)',
            }}
          >
            Participate
          </Button>
        </ButtonGroup>
      </div>
    </footer>
  );
}
