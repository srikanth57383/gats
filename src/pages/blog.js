import React from "react";
import { Row, Col, Container } from "reactstrap";
import Layout from "../components/Layout/Layout";
import BlogCard from "../components/Blog/BlogCard";
import BlogLeadingTechThumbnailImg from "../../static/images/blog/blog_leading_tech_thumbnail.jpg";
import BlogAIExpereinceThumbnailImg from "../../static/images/blog/blog_ai_experience_thumbnail.png";

import "../css/blog.css";

const blogArticles = [
  {
    title: "Leading tech in changing times",
    link: "leading_tech_in_changing_times",
    image: BlogLeadingTechThumbnailImg,
  },
  {
    title: "How to use AI for better customer experiences",
    link: "how_to_use_ai_for_better_customer_experiences",
    image: BlogAIExpereinceThumbnailImg,
  },
];

const blogPage = () => {
  return (
    <>
      <Layout>
        <Container fluid className="blog-posts-container py-4">
          <Container className="py-4">
            <h1 className="section-title">Latest from our Blog</h1>
          </Container>

          <Container className="py-3 my-3">
            <Row className="d-flex justify-content-around">
              {blogArticles.map(blogArticle => {
                return (
                  <Col md={6} lg={5}>
                    <BlogCard
                      title={blogArticle.title}
                      link={blogArticle.link}
                      image={blogArticle.image}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

export default blogPage;
