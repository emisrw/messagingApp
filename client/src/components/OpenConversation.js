import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useConversations } from "../contexts/ConversationsProvider";

function OpenConversation() {
  const [text, setText] = useState();
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    console.log(selectedConversation);
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((recipient) => (r) => r.id),
      text
    );
    setText("");
  }
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button type="submit">
                Send <ArrowRight color="white" className="ml-2" size={18} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default OpenConversation;
