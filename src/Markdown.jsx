import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { marked } from 'marked';
import './index.css';

function Markdown() {
  const initialMarkdown = `
# Heading
## Heading 2
> Block quotes!

[Visit this is link](https://google.com/) 

This is inline code: \`<div>Test</div> \`

- list item 1
- list item 2

**This is bolded text**

This is a block of code: 
\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`
![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png)
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    setMarkdown(initialMarkdown);
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const html = marked(markdown, { breaks: true });

  return (
    <div>
      <h1 className='p-5'>Markdown editor</h1>
      <Container fluid>
        <Row>
          <Col>
            <h5>Enter your markdown:</h5>
            <textarea
              className='rounded'
              id='editor'
              cols='50'
              rows='20'
              onChange={handleChange}
              value={markdown}
            />
          </Col>
          <Col>
            <h5>See the formatted result:</h5>
            <div
              className='rounded'
              id='preview'
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Markdown;
