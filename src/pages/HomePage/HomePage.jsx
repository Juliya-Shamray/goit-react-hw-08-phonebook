import {
  StyledImg,
  StyledImgWrap,
  StyledLink,
  StyledWrapper,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledImgWrap>
        <StyledImg
          src="https://st2.depositphotos.com/1023771/5391/i/600/depositphotos_53911431-stock-photo-social-network-concept-modern-smart.jpg"
          alt="phone and contacts"
        />
      </StyledImgWrap>
      <div>
        <h1>Experience Contact Management at Its Best</h1>
        <p>
          Contact management is more than just maintaining a list of names and
          phone numbers. It is a strategic tool that enhances communication,
          fosters relationship building, increases productivity, and supports
          both personal and professional growth. Whether you're an individual
          looking to stay organized or a business aiming to improve customer
          relationships, effective contact management is a fundamental practice
          in today's digital age.
        </p>
        <StyledLink to="/contacts">Get start</StyledLink>
      </div>
    </StyledWrapper>
  );
};
