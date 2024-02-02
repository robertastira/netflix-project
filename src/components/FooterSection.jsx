import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Instagram } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';


function FooterSection() {
  return (
<Container fluid className='bg-black pd-2 pt-3'>
      <Row>
        <Col></Col>
        <Col xs={6}>
        <Facebook size={20} className='me-3'/>
            <Instagram size={22} className='me-3'/>
            <Twitter size={22} className='me-3'/>
            <Youtube size={22} className='me-3'/></Col>
        <Col></Col>
      </Row>
      <Row className='mt-2'>
        <Col></Col>
        <Col xs={6} className='d-flex'>
        <Col><div>Audio and Subtitles</div>
        <div>Media Center</div>
        <div>Privacy</div>
        <div>Contact Us</div></Col>
        <Col><div>Audio Description</div>
        <div>Investor Relatrions</div>
        <div>Legal Notices</div></Col>
        <Col><div>Help Center</div>
        <div>Jobs</div>
        <div>Cookie Preferencies</div></Col>
        <Col><div>Gift Cards</div>
        <div>Terms of Use</div>
        <div>Corporate Informations</div></Col>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );

}

export default FooterSection;