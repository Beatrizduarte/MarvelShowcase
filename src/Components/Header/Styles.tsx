import styled from "styled-components";
import { theme } from "../../Utils/Theme";

export const Container = styled.div`
  margin-top: 30px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  max-width: 330px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: ${theme.size[500]};
  color: ${theme.gray[300]};
  font-weight: 700;
  margin-bottom: 5px;
  font-family: ${theme.font.Work};
`;

export const Text = styled.p`
  font-size: ${theme.size[100]};
  color: ${theme.gray[100]};
  margin-top: 5px;
  font-family: ${theme.font.Work};
`;

