import React from "react";
import { Link } from "gatsby";
import { Card, CardBody } from "reactstrap";

const BlogCard = ({ title, image, link }) => {
  return (
    <Link to={`/blog/${link}`} className="blog-card-link">
      <Card className="blog-card">
        <img src={image} alt={title} />
        <CardBody>
          <h1 className="blog-card-title text-center">{title}</h1>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
