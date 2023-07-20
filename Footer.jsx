import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <br />
              <h1>E-Shopify</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>O nas</h2>
            <ul>
              <li>
                <a href="#">Praca</a>
              </li>
              <li>
                <a href="#">Nasze sklepy</a>
              </li>
              <li>
                <a href="#">Regulamin</a>
              </li>
              <li>
                <a href="#">Zasady i warunki korzystania</a>
              </li>
              <li>
                <a href="#">Polityka prywatności</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Obsługa klienta</h2>
            <ul>
              <li>
                <a href="#">Centrum pomocy</a>
              </li>
              <li>
                <a href="#">Jak kupować</a>
              </li>
              <li>
                <a href="#">Śledź swoje zamówienie</a>
              </li>
              <li>
                <a href="#">Zakupy dla firm</a>
              </li>
              <li>
                <a href="#">Zwroty i reklamacje</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Kontakt</h2>
            <ul>
              <li>Email: E-shopify@xyz.com</li>
              <li>Tel: +48 123 456 780</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
