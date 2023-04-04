import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faBriefcase, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const JobOpeningCard = props => {
  const { active, title, location, id, experience, description } = props;
  return (
    <Col
      md="6"
      sm="12"
      className={`py-4 job-card ${active && "active"}`}
      key={id}
    >
      <h2 className="text-center job-title">{title}</h2>
      <h5 className="text-center job-location">{location}</h5>
      <div className="job-info d-flex justify-content-center py-3">
        <div className="d-flex align-items-center">
          <div className="job-icon mx-3">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div>
            <p className="m-0 info-title">Experience</p>
            <p className="m-0 info-text">{experience}</p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="job-icon mx-3">
            <FontAwesomeIcon icon={faUserAlt} />
          </div>
          <div>
            <p className="m-0 info-title">Job Type</p>
            <p className="m-0 info-text">Full Time</p>
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-center py-3 m-0">
        <Link
          to="/job-details/"
          state={{
            id,
            description,
            title,
            location,
            experience,
          }}
          className="button d-flex align-items-center"
        >
          Apply Now
          <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
        </Link>
      </p>
    </Col>
  );
};

export default JobOpeningCard;
