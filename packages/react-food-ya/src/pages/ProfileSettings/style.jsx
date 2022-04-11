import styled from 'styled-components';
import { colorCream, colorDelivery, colorHoverDelivery } from '../../styles/variables.styled';

const ProfileButtonOptions = styled.div`
  margin: 20px;
  .btn-group {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .btn-option {
      background-color: ${colorDelivery};
      color: ${colorCream};
      font-weight: bold;
      &:hover {
        background-color: ${colorHoverDelivery};
      }
      &.selected {
        background-color: ${colorHoverDelivery};
      }
    }
  }
`;
export { ProfileButtonOptions };
