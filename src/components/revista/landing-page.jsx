import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';

// Componentes
import { Typography } from '@rmwc/typography';
import { Grid, GridInner, GridCell } from '@rmwc/grid';
import { Button } from '@rmwc/button';

/* Styles */
import '../../styles/components/video.scss';
import Align from '../../styles/emotion/align';
import Flex from '../../styles/emotion/flex';

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query landingPageQuery {
        contentfulLandingPage {
          name
          coverVideo {
            file {
              url
            }
          }
          coverText
        }
      }
    `}
    render={data => (
      <div
        className="mdc-video"
      >
        <video
          id="mdc-video-control"
          className="mdc-video__item"
          muted
          autoPlay
          loop
        >
          <source
            src={`https://${data.contentfulLandingPage.coverVideo.file.url}`}
          />
        </video>
        <Grid
          style={{
            position: 'relative',
            color: 'black',
          }}
        >
          <GridCell
            span={12}
            phone={4}
          >
            <GridInner>
              <GridCell span={3} />
              <GridCell
                align="middle"
                span={6}
              >
                <Flex
                  height="70vh"
                >
                  <Align
                    text="center"
                  >
                    <Typography
                      use="headline4"
                      tag="div"
                    >
                      {data.contentfulLandingPage.coverText}
                    </Typography>

                    <br />

                    <Button
                      onClick={() => navigate('/ediciones')}
                      label="Comienza la aventura"
                      unelevated
                    />
                  </Align>
                </Flex>
              </GridCell>
            </GridInner>
          </GridCell>
        </Grid>
      </div>
    )}
  />
);

export default LandingPage;