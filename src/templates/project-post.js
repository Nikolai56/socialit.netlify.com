import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Content, { HTMLContent } from '../components/Content'
import Seo from '../components/Seo'

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  date,
  helmet,
  image,
  authors,
}) => {
  const PostContent = contentComponent || Content;
    return (
        <section className="project">
            <Seo
                title={title}
                // meta_title={meta_title}
                // meta_desc={meta_desc}
                // cover={cover}
                // slug={slug}
            />
            <div className="container">
                <h1>{title}</h1>
            </div>
            <div className="grey">
                <div className="container">
                    <p>{description} <span className="tr">{date}</span></p>
                </div>
            </div>
            <div className="container">
                {image ? <img className="project__img" src={image} alt={title} /> : null}
                <PostContent content={content}/>
            </div>
            {authors ? <div className="grey">
                <div className="container dib">
                    {authors.map(item => (
                        <p key={`${item.title}-${item.text}`}>
                            <span>{item.title}</span>
                            <br />{item.text}
                        </p>
                    ))}
                </div>
            </div> : null}
        </section>
    )
};

export default props => {
  const { markdownRemark: post } = props.data;

  return (
      <Layout>
          <ProjectPostTemplate
              content={post.html}
              contentComponent={HTMLContent}
              description={post.frontmatter.description}
              helmet={<Helmet title={`Работы | ${post.frontmatter.title}`} />}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              image={post.frontmatter.image}
              authors={post.frontmatter.authors}
              // cover={post.frontmatter.cover}
              // meta_title={post.frontmatter.meta_title}
              // meta_desc={post.frontmatter.meta_description}
              // slug={post.fields.slug}
          />
      </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        image
        authors {
            title
            text
        }
      }
    }
  }
`;
