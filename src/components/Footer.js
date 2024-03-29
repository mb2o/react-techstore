import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function Footer() {
  return (
    <ProductConsumer>
      {({ socialIcons }) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalized">
                    copyright &copy; tech store {new Date().getFullYear()}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {socialIcons.map(link => (
                    <a href={link.url} key={link.id}>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
