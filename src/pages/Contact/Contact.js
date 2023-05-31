import Socials from '../../components/Socials/Socials';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='body'>
        <h1>Let's talk tech!</h1>
        <h3>
          Want to reach out to me? I'm always available for a friendly chat.
        </h3>
        <span>Here's a list of some things I like to talk about:</span>
        <ul>
          <li>Tech, programming, frameworks, web development</li>
          <li>Artificial intelligence</li>
          <li>Cars</li>
          <li>Wine</li>
          <li>Skiing, trekking</li>
          <li>Everything else</li>
        </ul>
        <p>Feel free to contact me on any of the channels listed below!</p>
        <br/>
        <Socials/>
      </div>
    </div>
  );
}

export default Contact;