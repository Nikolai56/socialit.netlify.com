import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'react-collapse';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: 'всё',
            isMenuOpen: false,
        };
    }

    handleChangeTag = (e, tag) => {
        const activeEls = document.querySelectorAll('.menu_list2 .active');

        e.preventDefault();
        activeEls.forEach(el => el.classList.remove('active'));
        e.target.parentElement.classList.add('active');
        this.setState({ tag });
        this.handleCloseMenu();
    };

    handleToggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div>
                <nav className="nav2">
                    <div className="container">
                        <h1 className="text-center">Работы по категориям:</h1>
                        <br />
                        <div className="menu_toggle2" onClick={this.handleToggleMenu}>Категории</div>
                        <ul className="menu_list2">
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'всё')}>Всё </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'сайты')}>Сайты </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'полиграфия')}>Полиграфия </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'наружная реклама')}>Наружная реклама </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'логотип и фирменный стиль')}>Логотип и фирменный стиль </a></li>
                            <li><a href="#" onClick={(e) => this.handleChangeTag(e,'иллюстрации')}>Иллюстрации </a></li>
                        </ul>
                        <Collapse isOpened={this.state.isMenuOpen}>
                            <ul className="menu_list2 menu_list2-mobile">
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'всё')}>Всё </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'сайты')}>Сайты </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'полиграфия')}>Полиграфия </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'наружная реклама')}>Наружная реклама </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'логотип и фирменный стиль')}>Логотип и фирменный стиль </a></li>
                                <li><a href="#" onClick={(e) => this.handleChangeTag(e,'иллюстрации')}>Иллюстрации </a></li>
                            </ul>
                        </Collapse>
                    </div>
                </nav>
                <section className="portfolio">
                    <div className="container-fluid">
                        {posts
                            .filter(post => post.node.frontmatter.templateKey === 'project-post')
                            .filter(post => post.node.frontmatter.tag.includes(this.state.tag))
                            .map(({ node: post }) => (
                                <NavLink key={post.id} to={post.fields.slug} className={`project-link ${post.frontmatter.tag}`}>
                                    <img src={post.frontmatter.image} alt={`${post.frontmatter.title} | ${post.frontmatter.date}`} />
                                    {/*<p>{post.excerpt}</p>*/}
                                </NavLink>
                            ))}
                    </div>
                </section>
            </div>
        )
    }
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            tag
            title
            templateKey
            date(formatString: "DD.MM.YYYY")
            image
          }
        }
      }
    }
  }
`;
