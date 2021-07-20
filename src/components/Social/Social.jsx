import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Social() {
  return (
    <div class="social-container">
      <SocialIcon
        url="https://www.linkedin.com/in/sakil-khan-076926145/"
        style={{ height: 40, width: 40 }}
      />
      <SocialIcon
        url="https://github.com/sakilk130"
        style={{ height: 40, width: 40 }}
        bgColor="black"
      />
    </div>
  );
}
