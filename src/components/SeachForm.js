import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SeachForm({ params, onParamChange }) {
  return (
    <Form className="mb-5">
      <Form.Row className="align-items-end">
        <Form.Group as={Col} xs="auto">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.title}
            name="title"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto">
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            type="checkbox"
            label="Only Full-Time"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
