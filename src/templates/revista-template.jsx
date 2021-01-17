import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Typography } from '@rmwc/typography';
import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { Fab } from '@rmwc/fab';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Color from 'color';
import colors from '../styles/colors';

/* Layout y componentes personalizados */
import Layout from '../components/layout';
import Newsletter from '../components/shared/newsletter';
import Tags from '../components/revista/tags';
import Revista from '../components/revista/revista';

/* Styled Components */
import Align from '../styles/emotion/align';
import Separator from '../styles/emotion/separator';

/* Styles */
import '../styles/components/markdown-text.scss';

const RevistaTemplate = ({
  data: {
    contentfulRevista,
    allContentfulRevista,
    lastRevista,
  },
  pageContext,
}) => (
  <Layout>
    <Grid>
      <GridCell
        span={2}
        phone={4}
      />
      <GridCell
        span={8}
        phone={4}
        className="alignCenter"
      >
        <Typography
          use="headline3"
          tag="h3"
        >
          {contentfulRevista.title}
        </Typography>
        <Typography
          use="subtitle"
          tag="div"
          style={{
            marginTop: -35,
          }}
        >
        </Typography>
        <Tags
          tagItems={contentfulRevista.tag}
          style={{
            marginTop: -5,
          }}
        />

        <Typography
          use="body1"
          tag="div"
        >
          <ReactMarkdown
            className="mdc-markdown-text"
            source={contentfulRevista.content.content}
          />
        </Typography>

        <Separator
          color={Color(colors.fortnightlyPurple).lighten(0.8).hex()}
        />

        {lastRevista && (
          <GridInner>
            <GridCell span={12}>
              <Align
                text="center"
              >
                <Typography
                  use="headline4"
                  tag="h4"
                >
                  Espera la próxima edición
                </Typography>
              </Align>

              <Revista
                last
                title={lastRevista.title}
                slug={lastRevista.slug}
                columns={4}
                columnsPhone={4}
              />
            </GridCell>
            <br />
          </GridInner>
        )}

        <GridInner>
          <GridCell
            desktop={6}
            phone={2}
            tablet={4}
            align="left"
          >
            <Align
              text="left"
            >
              {pageContext.previous !== '' && (
                <Fab
                  icon="arrow_left"
                  label="Anterior"
                  onClick={() => navigate(`/${pageContext.previous}`)}
                  ripple
                />
              )}
            </Align>
          </GridCell>
          <GridCell
            desktop={6}
            phone={2}
            tablet={4}
            align="right"
          >
            <Align
              text="right"
            >
              {pageContext.next !== '' && (
                <Fab
                  trailingIcon="arrow_right"
                  label="Siguiente"
                  onClick={() => navigate(`/${pageContext.next}`)}
                  ripple
                />
              )}
            </Align>
          </GridCell>
        </GridInner>
        <GridInner>
          <Newsletter />

          <GridCell
            span={12}
          >
            <Align
              text="center"
            >
              <Typography
                use="headline4"
                tag="h4"
              >
              
              </Typography>
            </Align>
          </GridCell>
          {allContentfulRevista.nodes.map(revista => (
            <Revista
              key={revista.id}
              title={revista.title}
              image={revista.defaultimage}
              slug={revista.slug}
              columns={4}
              columnsPhone={4}
            />
          ))}
        </GridInner>
      </GridCell>
    </Grid>
  </Layout>
);

RevistaTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulRevista: PropTypes.object,
    allContentfulRevista: PropTypes.array,
    lastRevista: PropTypes.object,
  }),
  pageContext: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string,
  }),
};

export const query = graphql`
query revistaQuery(
  $slug: String!,
  $tag: [String],
) {

  allContentfulRevista(
    limit: 3,
    sort: { fields: updatedAt },
    filter: {
      tag:
      {
        elemMatch:
        {
          name:
          {
            in: $tag
          }
        }
      },
      slug: {
        ne: $slug
      }
    }
  ) {
    nodes {
      ...RevistaFragment
    }
  }

  contentfulRevista(slug: {
    eq: $slug
  }) {
    tag {
      name
      id
    }
    title
    content {
      content
    }
  }
}
`;
export default RevistaTemplate;