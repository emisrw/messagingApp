import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
function handleSubmit(e) {
  e.preventDefault();
}
export default function NewContactModal() {
  return (
    <>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}></Form>
      </Modal.Body>
    </>
  );
}
