import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageFluid = ({ fileName, altText, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 650, maxHeight: 390) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );

  const img = data.allImageSharp.edges.find(imgFile => {
    return imgFile.node.fluid.src.includes(fileName);
  });

  if (!img) {
    return null;
  }
  return <Img fluid={img.node.fluid} alt={altText} title={title} />;
};

export default ImageFluid;
